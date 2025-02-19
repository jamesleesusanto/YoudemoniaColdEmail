function sendEmails() {
  const emails = [
    "youdemonia.org@gmail.com",

  
    // Add Emails bellow




  ];

  //CHANGE VARIABLBE NAMES BELOW
  var state_of_recipient = "MI";


  
  var subjects = [
    "Help Us Connect MI's Youth to Your Organization's Network!",
    "[Non-Profit] Connect to " + state_of_recipient + "'s Youth With Youdemonia!",
    "Non-Profit Founder Sharing Resources!",
    "Free Way to Expand Student Non-Profit Involvement!"
  ];

  var body = `
    <p>Good Morning!</p>
    <p>My name is Nathan George, and I am a freshman at UPenn Wharton and the CEO of a student-led nonprofit organization called Youdemonia. 
    Our organization works to connect youth with local and national opporunities hosted by community organizations to increase youth engagement in the community.
    In the past, we have organized educational opportunities for the youth in Metro-Detroit, like the Youth Career Symposium sponsored by The Huntington Bank 
    and The College Admissions Webinar in collaboration with The University of Chicago.</p>

    <p>Today, thousands of youth-focused academic resources are offered annually, yet many students fail to utilize them because they do not know they exist or don't have the time to properly utilize them. 
    That was...until now! Youdemonia is building YouConnect - an online "one-stop shop" where students can find a variety of events, workshops, and other career-building opportunities without any hassle.</p>

    <p>Your organization caught my eye with your significant community impact, and I would love to see how we can work together to push your resources out to more youth through our platform (free to use)!</p>

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

    if (emailsSent < totalEmails) {
      // Randomized break between 5-10 minutes (300,000 - 600,000 ms)
      var breakTime = Math.floor(Math.random() * (600000 - 300000) + 300000);
      Logger.log(`Taking a break for ${breakTime / 60000} minutes before resuming...`);
      Utilities.sleep(breakTime);
    }
  }

  return ContentService.createTextOutput("All emails sent successfully with randomized batches and delays.");
}
