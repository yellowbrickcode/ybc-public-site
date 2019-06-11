# Yellow Brick Code
This is the repo for the Yellow Brick Code public site, hosted at [https://www.yellowbrickcode.co.uk](https://www.yellowbrickcode.co.uk).

## Running the site locally
### Install Hugo
Install the extended version of Hugo.

On Windows, the easiest way to do this is to install Chocolatey and then install Hugo via that. 

- Install Chocolatey - [https://chocolatey.org/install](https://chocolatey.org/install)
- Open a command window and run `choco install hugo-extended` to install Hugo

### Run the site
Now that Hugo is installed, it's time to get the code and run it locally.

- Clone the repo and initialise submodules for the repo (the theme is a submodule of the repo)
- In a command window, navigate to the src folder for the site (e.g. C:\\Source\ybc-public-site\\src) and run `hugo serve`

In your command window, you should now see something along the lines of:

```
Building sites … WARN 2019/06/11 20:09:58 Page's .URL is deprecated and will be removed in a future release. Use .Permalink or .RelPermalink. If what you want is the front matter URL value, use .Params.url.

                   | EN
+------------------+----+
  Pages            | 18
  Paginator pages  |  0
  Non-page files   |  0
  Static files     | 88
  Processed images |  0
  Aliases          |  0
  Sitemaps         |  1
  Cleaned          |  0

Total in 346 ms
Watching for changes in C:\Source\ybc-public-site\src\{content,layouts,static,themes}
Watching for config changes in C:\Source\ybc-public-site\src\config.yaml
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

If your command output looks like the above, you should now be able to browse to [http://localhost:1313](http://localhost:1313) and see the Yellow Brick Code site running locally.