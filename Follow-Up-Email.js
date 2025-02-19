function sendEmails() {
    const emails = [
      "youdemonia.org@gmail.com",
 
      // Add Emails bellow

      

    ];
  
    var subjects = [
      "[Action Required] Increase Youth Engagement With Youdemonia",
      "[Following-Up] Youdemonia Free Youth Engagement Service",
      "[Following-Up] Fellow Nonprofit Sharing Resources!"
    ];
  
    var body = `
      <p>Good Afternoon,</p>
  
      <p>I am circling back on my previous email about <b>YouConnect</b>, an online "one-stop shop" where students can get access to local and national nonprofit events and resources for free.</p>
  
      <p>Our organization promotes opportunity awareness and combats social disparities by creating community events centered around youth engagement.
      In the past, we have organized educational opportunities for the youth in Metro-Detroit, like the <b>Youth Career Symposium</b> sponsored by <b>The Huntington Bank</b>
      and <b>The College Admissions Webinar</b> in collaboration with <b>The University of Chicago</b>.</p>
  
      <p>Your organization struck us as a strong potential partner, and I would love to get on a call to talk about how we can promote your opportunities to more youth through our platform!</p>
  
      <p>If your team is interested in engaging more students, I would love to chat with you when you are available.</p>
  
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