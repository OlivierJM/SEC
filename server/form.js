import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
    accountExist: function(email) {

        var user = Accounts.findUserByEmail(email);
        if (user) {
            return 'Sorry email already registered.';
        }
        return false;
    }
});
