import firebase from 'firebase'
import {ref} from './config/fireConstants'
function addEntry(userId, target, expected, actual) {
	ref.child('users/' + userId).child(target).push([expected, actual]);
	console.log("nooooooooooooooooooo");
}

export function getEntry(userId, target) {
	return ref.child('users/' + userId).child(target);
}
