from loadData import rawToTime, getNumber

def getInfo(userId, target, time, place):
    d = {}
    time = rawToTime(time)
    userName = ""
    for x in target:
        arr = getNumber(userId, target)
        if userName == "":
            username = arr[0];
        d[arr[1]] = [arr[2], formatMessage(userName, a[1], time, place)]

    for key in d:
        sendMessage(d[key][0], d[key][1])

def formatMessage(userName, targetName, time, place):
    return "Hello %s, %s would like to meet at %s at %s." % (userName.title(), targetName.title(), place.title(), time)

def sendMessage(number, message):
    return
