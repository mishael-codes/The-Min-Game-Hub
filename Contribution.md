# CONTRIBUTION GUIDE

You would need to install git if you don't already have it installed. You can follow this tutorial to set it up [How to Setup Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

Then do the following...

## 1) Fork this Repository

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.

## 2) Clone the Repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone <copied-url>
```

where <copied-url> (without the lesser than and greater than signs <>) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


## 3) Create a Branch

#### _Note: Make sure you have created a branch before you start working on the project._ <br />

Change to the forked repository directory on your computer by using:

```
cd The\ Min\ Game\ Hub
```

Now create a branch using the `git branch` command:

```
git branch <branch-name>
```

Then switch to the created branch using the `git branch` command:

```
git checkout <branch-name>
```

## 4) Make Necessary Changes and Commit those Changes

Add those changes to the branch you just created using the `git add` command:

```
git add <file-name>
```
Now commit those changes using the `git commit` command:

```
git commit -m "Commit Message"
```

replacing `Commit Message` with your proper commit message.

## 5) Push Changes to GitHub

Push your changes using the command `git push`:

```
git push -u origin <branch-name>
```

replacing _<branch-name>_ with the name of the branch you created earlier.

## 6) Submit Your Changes for Review by Initiating a Pull Request (PR)

To initiate a pull request on GitHub, navigate to your repository and locate the `Compare & pull` request button. Simply click on this button to proceed with the pull request process.

Now submit the pull request.

## 7) Wait, for Response from the Reviewer
An email will be send to let you know if your request was accepted or rejected.

OR

## 1) Create an issue

You can do this by clicking on the issues tab at the top of the repo

## 2) Wait to be assigned the task

You should receive an email statingthat you were assigned to fix the issue

## 3) Follow the steps listed in the first method

### ***Happy Contributing***
