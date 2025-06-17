function sendEmails() {
  const emails = [
    "youdemonia.org@gmail.com",

  
    // ADD EMAILS BELOW

    "nathanmanalilgeorge@gmail.com"


  ];



  //  CHANGE VARIABLBE NAMES BELOW
  var state_of_recipient = "MI - DELETE & CHANGE";
  var name_of_sender = "James Susanto - DELETE & CHANGE" ;

  //If you're in college, say your college; if not, you can say your Hometown: "from Detroit. Michigan"
  var intro_of_sender = "a first-year at the University of Michigan - DELETE & CHANGE"; 

  var position_at_youdemonia = "CEO - DELETE & CHANGE";
  var phone_number_of_sender = "(248) 444-6095 - DELETE & CHANGE";
  var email_of_sender = "jsusanto@umich.com - DELETE & CHANGE";
  var calendly_link = "calendly.com/youdemonia-meets - DELETE & CHANGE";


  /*
  SAMPLE VARIABLES:

  var state_of_recipient = "MI";
  var name_of_sender = "James Susanto" 
  var intro_of_sender = "from Detroit, Michigan"; 
  var position_at_youdemonia = "CEO";
  var phone_number_of_sender = "(248) 444-6095";
  var email_of_sender = "jsusanto@umich.com";
  var calendly_link = "calendly.com/youdemonia-meets";
  */



  
  //  ONCE YOU CHANGED THE VARIABLES AND LISTED EMAILS, YOU'RE READY TO RUN
  //  IF YOU DIDN'T CHANGE ONE OF THE VARIABLES YOU'LL GET AN ERROR
  //  THE ERROR MESSAGE WILL SAY THE FIRST VARIABLE YOU DIDN'T CHANGE
  //  CHANGE THE VARIABLE AND RUN IT AGAIN
  //
  //  DON'T CHANGE ANYTHING BELOW


  

  var subjects = [


    "Help Us Connect " + state_of_recipient + "'s Youth to Your Organization's Network!",
    "[Non-Profit] Connect to " + state_of_recipient + "'s Youth For Free", 
    "Non-Profit Founder Sharing Resources!",
    "High Schooler Sending Youth to Your Organization's Network"



  ];

  


  var body = `
    <p>Good Morning!</p>

    <p>My name is ` + name_of_sender + `, and I am ` + intro_of_sender + ` and the ` + position_at_youdemonia + ` of a student-led nonprofit organization called Youdemonia. 

    Our organization works to connect youth with educational opportunities hosted by civic organizations to increase youth engagement in the community.

    </p>



    <p>Today, thousands of youth-focused academic resources are offered annually, yet many students fail to utilize them because they do not know they exist or don't have the time to properly utilize them. 



    That was...until now! Youdemonia is building YouConnect - an online "one-stop shop" where students can find a variety of events, workshops, and other career-building opportunities without any hassle.</p>



    <p><b>I was impressed by your organization’s impact thus far and would love to schedule a 20 minute call to talk about how we can work together to push your resources out to more youth through our platform (free to use)!</b></p>



    <p>My availability is listed <a href = ` + calendly_link + `> here</a>, would love to chat anytime convenient if your team is interested in engaging more students!</p>



    <p>Looking forward to hearing from you,</p>

    

    <p>--<br>

    <b>` + name_of_sender + `</b><br>

    ` + position_at_youdemonia + `, <a href="http://www.youdemonia.org">Youdemonia</a><br>

    ` + phone_number_of_sender + ` | <a href=` + email_of_sender + `>` + email_of_sender + `</a></p>

  `;




  
  //Variables Check
  if (state_of_recipient == "MI - DELETE & CHANGE"){
    throw new Error("Didn't change var state_of_recipient");
  }
  if (name_of_sender == "James Susanto - DELETE & CHANGE"){
    throw new Error("Didn't change var name_of_sender");
  }
  if (intro_of_sender == "a first-year at the University of Michigan - DELETE & CHANGE"){
    throw new Error("Didn't change var intro_of_sender");
  }
  if (position_at_youdemonia == "CEO - DELETE & CHANGE"){
    throw new Error("Didn't change var position_at_youdemonia");
  }
  if (phone_number_of_sender == "(248) 444-6095 - DELETE & CHANGE"){
    throw new Error("Didn't change var phone_number_of_sender");
  }
  if (email_of_sender == "jsusanto@umich.com - DELETE & CHANGE"){
    throw new Error("email_of_sender");
  }
  if (calendly_link == "calendly.com/youdemonia-meets - DELETE & CHANGE"){
    throw new Error("calendly_link");
  }



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