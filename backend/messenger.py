import sys, json
from loadData import rawToTime, getNumber, predict
from twilio.rest import TwilioRestClient

twilioNum = "+16692717597"
acc_sid = "AC9790e227b0aa0c55f913d1b0f15ffa9f"
auth_tok = "ad56643ba58e9763f22bcbcbf8eb96b8"

def formatMessage(userName, targetName, time, place):
    return "Hello %s, %s would like to meet at %s at %s." % (targetName.title(), userName.title(), place.title(), time)

def sendMessage(number, message_body):
    account_sid = acc_sid # Your Account SID from www.twilio.com/console
    auth_token  = auth_tok  # Your Auth Token from www.twilio.com/console

    client = TwilioRestClient(account_sid, auth_token)

    message = client.messages.create(body=message_body,
         to="+1" + str(number),    # Replace with your phone number
         from_=twilioNum) # Replace with your Twilio number

    logMessage("Message Sent to: %d\nMessage Content: %s\n\n" % (number, message_body)) 

def sendInvites(userId, target, time, place):
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

def logMessage(text):
    f = open("out.log", 'a+')
    f.write(text)
    f.close()

#sendInvites("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice", predict("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice", 43200), "Thomas M. Siebel Center for Computer Science")

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    print(lines)

if __name__ == '__main__':
	main()
