---
title: SwiftUI AWS Amplify
author: Bruce Wade
date: 2020-04-18 9:07:00-0700
categories: [SwiftUI, AWS Amplify]
tags: [swift, SwiftUI, AWS Amplify]
---
<a href="https://aws-amplify.github.io/docs/" target="_blank">AWS Amplify Framework</a> makes things a lot easier to get an MVP up and running quickly. I have worked for a lot of startups over the years and many of them always fail because they try to build everything from scratch OR control the entire stack. This isn't a problem for a product that is already gaining traction and earning money. However if you don't even know if the product will have interest you should really be focusing on leveraging what other successful companies can provide you. 

# Overview
In several articles we are going to cover building a SwiftUI app from scratch using the Amplify framework. We will cover authentication, file uploads/downloads, data storage, GraphQL and more. Lets start by making sure all the requirements are in place.

## Requirements
1. The first most important component is having a <a href="https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation" target="_blank">AWS account setup</a>, if you setup a new account you will have access to the AWS Free Tier for a year.

2. Next you will need to install brew, node and npm. 
> **NOTE**: There is an issue with Amplify and node version manager (nvm) it is best to install node using brew on mac as is detailed below. This is very annoying but its is related to how Xcode uses a non-interactive shell.

### Installing Brew
Brew is a package manager for macOS it makes it convenent to installing and update software dependancies. Everything we will install from this point forward will be done in the tirmenal so open it now.

The following command will download and execute a ruby script that will install the <a href="https://brew.sh">Homebrew package manager</a>

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

To make sure everything was installed correctly run the following commands not including the `$`

```bash
$ brew -v
```

Output should be something like this:
```
Homebrew 2.2.13
Homebrew/homebrew-core (git revision e49a6; last commit 2020-04-17)
Homebrew/homebrew-cask (git revision ddcbf; last commit 2020-04-17)
```

### Installing node & npm

Now that we have brew installed its easy to install node. Run the following command in the terminal.

```bash
$ brew install node
```

Once that is finally run to following to insure everything installed correctly. Your version out might might be different depending on when you are reading this.

```bash
$ node -v
v13.13.0
$ npm -v
6.14.4
$ which node
/usr/local/bin/node
```

### Installing Amplify CLI & confirguing it

We are now ready to install the amplify cli that we will use through out the tutorials.

```bash
$ npm install -g @aws-amplify/cli
```

This will install the cli globaly so we can run it from anywhere in the terminal. Next we need to configure amplify.

```bash
$ amplify configure
```
This will first open AWS for you to log into your account. Once you are logged in press `enter` in the terminal.

You will be prompted to select your AWS Region select `us-east-1` and press enter.

Next it will ask you for a new IAM user. You will be creating this user specifically to use the amplify cli when creating resources.

Once you choose a name for your new account press `enter` and AWS will open in your browser to the Add User screen. As you follow the steps you will get to a page that allows you to download your user access details download this file and keep it in a safe place. Follow the steps and once you are finished creating your user press `enter` in the terminal.

Next you will be asked for your accessKeyId and secret which are both in the follow you have downloaded in the previous step. Enter them when asked than press `enter`. Next you will be asked for a profile name I like to use the same name as the user I have just created. This allows me to have more than one AWS IAM account setup. Enter the profile name than press `enter`.

You should see the following message:
```
Successfully set up the new user.
```

What this configuration did was create the directory `~/.aws` with two files one `config` which contains the region you have selected and it has `[profile name]` above it to allow the use of seperate profiles. The other file `credentials` contains your access key and secret set for your profile name. Go here to learn more about <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html" target="_blank">Configuring the AWS CLI</a>

### Installing CocoaPods

Amplify uses CocoaPods to install dependances (hopefully someday they will support <a href="https://swift.org/package-manager/" target="_blank">swift package manager</a> instead)

CocoaPods is a ruby gem macOS comes with Ruby preinstalled so you just have to run the following command. This requires using `sudo` so enter your password when asked.

```bash
$ sudo gem install cocoapods
```

## Tutorials break down

The app we are going to build will be broken down into several sections and the links will be active as the sections have been written.

1. Authentication using `AWSMobileClient` and <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html" target="_blank">Amazon Cognito</a>. Cognito provides the support for handling all you authentication needs. Such as login, logout, forgot password, reset, social login with Facebook/Amazon/Google/Apple etc... This is the starting point of this SwiftUI app we are going to build [get started here](/posts/swiftui-cognito/).