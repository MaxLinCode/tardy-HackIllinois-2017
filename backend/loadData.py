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

#Test
#addEntry("kijZjJJ5ozPZxfeHYfjh3zd3TUh1", "Janice", "80000", "90000")

data = getEntry('kijZjJJ5ozPZxfeHYfjh3zd3TUh1', "Janice")

print(data.val())
