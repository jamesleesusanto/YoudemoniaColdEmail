function sendEmails() {

    const emails = [

      "youdemonia.org@gmail.com",

 

      // Add Emails bellow



      



    ];

  

    var subjects = [

      "[Following-Up] Resource Increasing Your Youth Engagement ",

      "[Following-Up] Nonprofit Sharing Resources",

      "[Following-Up] Fellow Nonprofit Sharing Resources!"

    ];

  

    var body = `

      <p>Good Morning,</p>

  

      <p>I am circling back on my previous email about <b>YouConnect</b>, a free platform we are creating to push your resources to youth in your area! </p>

  

      <p>Your organization struck us as a strong potential partner, and I would love to get on a call to walk you through our platform and how exactly we can increase your youth engagement. </p>

  

      <p>My availability is listed here [INSERT CALENDLY LINK], would love to chat anytime convenient!</p>

  

      <p>Looking forward to hearing from you,</p>

     

      <p>--<br>

      <b>Nathan George</b><br>

      CEO and Founder, <a href="http://www.youdemonia.org">Youdemonia</a><br>

      The Wharton School | University of Pennsylvania Class of 2028<br>

      (248) 444-6095 | <a href="mailto:nathan1@wharton.upenn.edu">nathan1@wharton.upenn.edu</a></p>

    `;

  

    var totalEmails = emails.length;

    var emailsSent = 0;

  

    while (emailsSent < totalEmails) {

      // Randomly determine batch size (between 15 and 25 emails)

      var batchSize = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

      batchSize = Math.min(batchSize, totalEmails - emailsSent); // Adjust batch size if fewer emails left

  

      for (var i = 0; i < batchSize; i++) {

        try {

          var subject = subjects[Math.floor(Math.random() * subjects.length)]; // Random subject

          MailApp.sendEmail({

            to: emails[emailsSent],

            subject: subject,

            htmlBody: body,

          });

  

          Logger.log("Email sent to: " + emails[emailsSent]);

          emailsSent++;

  

          if (emailsSent < totalEmails) {

            // Randomized delay between emails (10-15 sec)

            var delay = Math.floor(Math.random() * (15000 - 10000) + 10000);

            Utilities.sleep(delay);

          }

        } catch (e) {

          Logger.log("Failed to send email to: " + emails[emailsSent] + " - " + e.toString());

        }

      }

    }

}