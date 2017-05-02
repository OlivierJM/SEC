import {Meteor} from 'meteor/meteor';
import {Images} from '../../Collections/collections.js';




Meteor.startup(function() {

    Uploader.finished = function(index, file) {
        let fileName = $('#file_name').val();
        let user = Meteor.userId();
        let fileId = new Meteor.Collection.ObjectID().valueOf();

        Images.insert({
          _id:fileId,
          name:fileName,
          file:file,
          uploader:user,
          date:new Date()
        })

        }


    }
);
