# Password Generator with User Prompts

## Table of Contents 

* [Overview](#Overview)
* [Access](#Access)
* [Details](#Details)

## Overview

This repo contains three files - css, html, and js - that allow the user to randomly generate a password between 8-128 characters that can include special characters, letters and numbers. 

## Access

You can find the deployed webpage here: https://caitlin-emily.github.io/passwordGenerator/

You can find the GitHub repo here: https://github.com/caitlin-emily/passwordGenerator

## Details

This webpage allows users to generate a random password between 8-128 characters. The user can chose to include special characters, letters and numbers. The page uses math.random to generate the password, which is displayed on the page after the user finishes answering all prompts. A new password can be generated again by simply clicking the Generate button. While math.random does automatically allow the user to regenerate passwords using their chosen parameters, it is not the most secure method. In the future, a more secure method would be to use window.crypto.getRandomValues, which requires a different input value than math.random. 

