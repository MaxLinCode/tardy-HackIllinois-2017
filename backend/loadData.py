from firebase import firebase

import pyrebase

config = {
    "apiKey": "AIzaSyDiL1XGJxQqqd8WCnwx6FQvzapSphklSmk",
    "authDomain": "tardy-ccd34.firebaseapp.com",
    "databaseURL": "https://tardy-ccd34.firebaseio.com",
    "storageBucket": "tardy-ccd34.appspot.com",
    "serviceAccount": "tardy-ccd34-firebase-adminsdk-lxytz-ab3d23dae1.json"
    }

firebase = pyrebase.initialize_app(config)
db = firebase.database()

def addEntry(userId, target, expected, actual):
    db.child('users/' + userId).child(target).push([expected, actual]);

def getEntry(userId, target):
    return db.child('users/' + userId).child(target).get().val()

def predict(userId, target, expected):
    vallist = list(getEntry(userId, target).values())
    total = 0
    count = 0
    mult = 1
    for item in vallist:
        diff = int(item[1]) - int(item[0])
        if diff < (0 - 43200):
            diff = diff + 86400
        if diff > 43200:
            diff = diff - 86400
        diff = diff * mult
        total += diff
        count += mult
        mult = mult * 1.03
    avg = total / count
    print(avg)
    return expected - avg

def rawToTime(rawval):
    intval = int(rawval)
    seconds = intval % 60
    intval = intval // 60
    minutes = intval % 60
    intval = intval // 60
    hours = intval % 24
    return ("%02d:%02d:%02d" % (hours, minutes, seconds))


#Test
#addEntry("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice", "68400", "68400")

testval = predict('kijZjJJ5ozPZxfeHYfjh3zd3TUh1', "Janice", 34980)
print(testval)
print(rawToTime(34980))
print(rawToTime(testval))
