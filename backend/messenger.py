from loadData import rawToTime, getNumber, predict
from twilio.rest import TwilioRestClient

twilioNum = "+16692717597"
acc_sid = "AC9790e227b0aa0c55f913d1b0f15ffa9f"
auth_tok = "ad56643ba58e9763f22bcbcbf8eb96b8"

def formatMessage(userName, targetName, time, place):
    return "Hello %s, %s would like to meet at %s at %s." % (targetName.title(), userName.title(), place.title(), time)

def sendMessage(number, message):
    account_sid = acc_sid # Your Account SID from www.twilio.com/console
    auth_token  = auth_tok  # Your Auth Token from www.twilio.com/console

    client = TwilioRestClient(account_sid, auth_token)

    message = client.messages.create(body=message,
         to="+1" + str(number),    # Replace with your phone number
         from_=twilioNum) # Replace with your Twilio number

    print("Message Sent to: %d\nMessage Content: %s" % (number, message)) 

def getInfo(userId, target, time, place):
    d = {}
    time = rawToTime(time)
    userName = ""
    for x in target:
        arr = getNumber(userId, target)
        if userName == "":
            userName = arr[0];
        d[arr[1]] = [arr[2], formatMessage(userName, arr[1], time, place)]

    for key in d:
        sendMessage(d[key][0], d[key][1])

getInfo("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice", predict("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice", 43200), "Thomas M. Siebel Center for Computer Science")
