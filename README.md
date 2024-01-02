# Node.js Markdown Hyperlink Checker

This is a link checker for Markdown files.

1. Install the dependencies with `npm install`.
2. Replace the content in the README.md file with the actual Markdown content you want to check.
3. Run the program with `npm run dev`.

Here are some example links for testing:

[Link](https://github.com)
[Link](https://github.aaaaa.com)
[Link](http://google.com)
[Link](https://github.com)

Expected stdout:

```
Link https://github.com is 200
Link https://github.com is 200
Link http://google.com is 200
Link https://github.aaaaa.com is FetchError: request to https://github.aaaaa.com/ failed, reason: Hostname/IP does not match certificate's altnames: Host: github.aaaaa.com. is not in the cert's altnames
```
