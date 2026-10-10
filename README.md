# Reading Width for Thunderbird

A Thunderbird MailExtension that centers displayed email messages and caps their width. The default is `60ch`; change it from the add-on's options page to any value from 30 to 120 characters.

## Install locally

The packaged add-on is `thunderbird-reading-width.xpi`. In Thunderbird, open **Tools > Add-ons and Themes**, choose **Install Add-on From File**, and select the XPI.

Release builds of Thunderbird require add-ons to be signed. To try this unsigned local build, open **Tools > Developer Tools > Debug Add-ons**, choose **Load Temporary Add-on**, and select `manifest.json`. A temporary add-on is removed when Thunderbird exits.

## Permission

Thunderbird requires the `messagesModify` permission to register message-display scripts. This add-on uses that API only to apply local CSS and JavaScript to the displayed message; it does not edit or send message content.