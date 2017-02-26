"""
This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
The Intent Schema, Built-in Slots, and Sample Utterances for this skill, as well
as testing instructions are located at http://amzn.to/1LzFrj6

For additional samples, visit the Alexa Skills Kit Getting Started guide at
http://amzn.to/1LGWsLG
"""

from __future__ import print_function
from twilio.rest import TwilioRestClient
from loadData import rawToTime, getNumber
from config import *

accountSid = 'ACcf54ef49063aaa784c99aec82d7f16c2'
authToken = '31f817a48ee7cd461c07c57490eac6ce'
fromNumber = '19163183442'

# --------------- Helpers that build all of the responses ----------------------


def build_speechlet_response(title, output, reprompt_text, should_end_session):
    return {
        'outputSpeech': {
            'type': 'PlainText',
            'text': output
        },
        'card': {
            'type': 'Simple',
            'title': 'SessionSpeechlet - ' + title,
            'content': 'SessionSpeechlet - ' + output
        },
        'reprompt': {
            'outputSpeech': {
                'type': 'PlainText',
                'text': reprompt_text
            }
        },
        'shouldEndSession': should_end_session
    }


def build_response(session_attributes, speechlet_response):
    return {
        'version': '1.0',
        'sessionAttributes': session_attributes,
        'response': speechlet_response
    }

# --------------- Functions that control the skill's behavior ------------------

def get_welcome_response():
    session_attributes = {}
    card_title = "Welcome"

    speech_output = "Hello, welcome to the Tardy skill."

    # If the user either does not reply to the welcome message or says something
    # that is not understood, they will be prompted again with this text.
    reprompt_text = "You can ask me to send a message to your friends."

    should_end_session = False
    return build_response(session_attributes, build_speechlet_response(
        card_title, speech_output, reprompt_text, should_end_session))

def sarah_intent_handler(intent):
    card_title = "Sarah"
    speech_output = "Sarah is the best"

    return build_response(None, build_speechlet_response(
        card_title, speech_output, None, False))

def formatMessage(userName, targetName, time, place):
    return "Hello %s, %s would like to meet at %s at %s." % (targetName.title(), userName.title(), place.title(), time)

def getInfo(userId, target, time, place):
    d = {}
    time = rawToTime(time)
    userName = ""
    for x in target:
        arr = getNumber(userId, target)
        if userName == "":
            username = arr[0]
        d[arr[1]] = [arr[2], formatMessage(userName, a[1], time, place)]

    for key in d:
        sendText(d[key][0], d[key][1])

def twilio_intent_handler(intent):
    card_title = "Twilio"
    #print(intent['slots'])
    target = intent["slots"]["nameSlot"]["value"]
    time = intent["slots"]["timeSlot"]["value"]
    place = intent["slots"]["placeSlot"]["value"]

    #userID = kijZjJJ5ozPZxfeHYfjh3zd3TUh1
    getInfo('kijZjJJ5ozPZxfeHYfjh3zd3TUh1', target, time, place)
    #cellNumber = ""
    #messageText = ""
    #slots = intent['slots']
    #cellNumber = slots['numberSlot']['value']
    #messageText = slots['msgSlot']['value']

    # call the method to send text
    speech_output = "Message sent."

    # Setting reprompt_text to None signifies that we do not want to reprompt
    # the user. If the user does not respond or says something that is not
    # understood, the session will end.
    return build_response(None, build_speechlet_response(
        card_title, speech_output, None, False))

#number,message
def sendText(to_num, msg_text):
    try:
        client = TwilioRestClient(accountSid, authToken)
        client.messages.create(
            to=to_num,
            from_=from_num,
            body=msg_text
            )
        return True
    except Exception as e:
        print("Failed to send message: ")
        print(e.code)
        return False

def help_intent_handler(intent):
    card_title = "Help"
    speech_output = "Ask me to send someone a text."

    return build_response(None, build_speechlet_response(
        card_title, speech_output, None, False))

def misunderstood_handler(intent):
    card_title = "Misunderstood"

    speech_output = "Sorry, please try again."

    return build_response(None, build_speechlet_response(
        card_title, speech_output, None, True))

def handle_session_end_request():
    card_title = "Session Ended"
    speech_output = "Thank you for trying our Tardy skill. " \
                    "Have a great time at Hack Illinois! "
    # Setting this to true ends the session and exits the skill.
    should_end_session = True
    return build_response(None, build_speechlet_response(
        card_title, speech_output, None, should_end_session))

# --------------- Events ------------------

def on_launch(launch_request):
    """ Called when the user launches the skill without specifying what they
    want
    """
    print("on_launch requestId=" + launch_request['requestId'])

    # Dispatch to your skill's launch
    return get_welcome_response()


def on_intent(intent_request):
    """ Called when the user specifies an intent for this skill """
    print("on_intent requestId=" + intent_request['requestId'])

    intent = intent_request['intent']
    intent_name = intent_request['intent']['name']

    # Dispatch to your skill's intent handlers
    if intent_name == "SarahIntent":
        return sarah_intent_handler(intent)
    elif intent_name == "TwilioIntent":
        return twilio_intent_handler(intent)
    elif intent_name == "HelpIntent":
        return help_intent_handler(intent)
    elif intent_name == "AMAZON.CancelIntent" or intent_name == "AMAZON.StopIntent":
        return handle_session_end_request()
    else:
        return misunderstood_handler(intent)

# --------------- Main handler ------------------

def lambda_handler(event, context):
    """ Route the incoming request based on type (LaunchRequest, IntentRequest,
    etc.) The JSON body of the request is provided in the event parameter.
    """
    session_attributes = {}

    #applicationId = event['session']['application']['applicationId']
    #if applicationId != TWILIO_APPLICATION_ID:
    #    should_end_session = True
    #    bad_request_output = "Bad Request"
    #    print("Bad ApplicationId Received: "+applicationId)
    #    return build_response(session_attributes, build_speechlet_response("Twilio", bad_request_output, None, should_end_session))

    if event['request']['type'] == "LaunchRequest":
        return on_launch(event['request'])
    elif event['request']['type'] == "IntentRequest":
        return on_intent(event['request'])