import {Meteor} from 'meteor/meteor';


Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/public/uploads/tmp',
    uploadDir: process.env.PWD + '/public/uploads/',
    // tmpDir: "C:\\Users\\ABEDNEGO\\manoap-eth\\public\\uploads\\tmp",
    // uploadDir: "C:\\Users\\ABEDNEGO\\manoap-eth\\public\\uploads",
    checkCreateDirectories: true, //create the directories for you
    acceptFileTypes:/(\.|\/)(jpg|png)$/i,
  });
});
