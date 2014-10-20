



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>showdown/showdown.js at master · coreyti/showdown</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="coreyti/showdown" name="twitter:title" /><meta content="JavaScript port of Markdown (from http://attacklab.net/showdown/)" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/4937?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/4937?v=2&amp;s=400" property="og:image" /><meta content="coreyti/showdown" property="og:title" /><meta content="https://github.com/coreyti/showdown" property="og:url" /><meta content="JavaScript port of Markdown (from http://attacklab.net/showdown/)" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="3E10D2FC:13B0:1EFC6832:54246D10" name="octolytics-dimension-request_id" /><meta content="3672002" name="octolytics-actor-id" /><meta content="eastviolence" name="octolytics-actor-login" /><meta content="67da18ee8e9927727dc1a1666702ce20df0f62629a9c9c895a0ce8ff1385d702" name="octolytics-actor-hash" />
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="S/9+l+f/74JqbLYFVCmtEF71ieVhlWqBk/MbjkblfRC5oxaVJSLKKz/wnafz8LxMuourgKeDcbioAB2GtrFhVg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-6571b20288f91b3129fa8ceaf85dde82a92181f5.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-42ec2b265d351d64e781f2d3e6d73c53e58529aa.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="b368351c18640fba118029d35fb41c67">

      
  <meta name="description" content="JavaScript port of Markdown (from http://attacklab.net/showdown/)">
  <meta name="go-import" content="github.com/coreyti/showdown git https://github.com/coreyti/showdown.git">

  <meta content="4937" name="octolytics-dimension-user_id" /><meta content="coreyti" name="octolytics-dimension-user_login" /><meta content="75547" name="octolytics-dimension-repository_id" /><meta content="coreyti/showdown" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="75547" name="octolytics-dimension-repository_network_root_id" /><meta content="coreyti/showdown" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/coreyti/showdown/commits/master.atom" rel="alternate" title="Recent Commits to showdown:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search">
          <form accept-charset="UTF-8" action="/coreyti/showdown/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/coreyti/showdown/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/eastviolence" data-ga-click="Header, go to profile, text:username">
      <img alt="Arne Østvold" class="avatar" data-user="3672002" height="20" src="https://avatars0.githubusercontent.com/u/3672002?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">eastviolence</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="coreyti/showdown">This repository</span>
    </li>
      <li>
        <a href="/coreyti/showdown/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jX1/7fMAzfqg5abiRXvviH2QX1cnYjy6qE5li7DmQU/Xa4pOVwvTcStPGeMl6nzWurufO+9YOJmUcA6udw8TsA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mgrcEUWTA5ET3UKoAAnTmAvyzvJcBjPtLqj3m6p0L3/0PJhff95VjszlS+FqZSswV8Uw5pKEj8hiQ4w/yFvssg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="75547" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/coreyti/showdown/watchers">
        98
      </a>
      <a href="/coreyti/showdown/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/coreyti/showdown/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tcYTl2cDRkD3OebQQiG7IQpxcphvxImFEkPrx+uhkkotrjjYJFMj+UCTmaKh98FlGf9fpvnwEltH/Pkzo2nEVw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar coreyti/showdown">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/coreyti/showdown/stargazers">
          2,096
        </a>
</form>
    <form accept-charset="UTF-8" action="/coreyti/showdown/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MjIgdKUyE/8l9Q9NEwsrRJL+9DL3Jpgjk1ns5kKDFF0N37SGgJdaBoPP8xW/b+D0zjAWDO8VU/9GKkKvAGqiRw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star coreyti/showdown">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/coreyti/showdown/stargazers">
          2,096
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/coreyti/showdown/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of coreyti/showdown to your account" aria-label="Fork your own copy of coreyti/showdown to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/coreyti/showdown/network" class="social-count">481</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/coreyti" class="url fn" itemprop="url" rel="author"><span itemprop="title">coreyti</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/coreyti/showdown" class="js-current-repository js-repo-home-link">showdown</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/coreyti/showdown/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/coreyti/showdown" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /coreyti/showdown">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/coreyti/showdown/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /coreyti/showdown/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/coreyti/showdown/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /coreyti/showdown/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/coreyti/showdown/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /coreyti/showdown/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/coreyti/showdown/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /coreyti/showdown/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/coreyti/showdown/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /coreyti/showdown/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/coreyti/showdown.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/coreyti/showdown.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:coreyti/showdown.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:coreyti/showdown.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/coreyti/showdown" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/coreyti/showdown" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/coreyti/showdown/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of coreyti/showdown as a zip file"
                   title="Download the contents of coreyti/showdown as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/coreyti/showdown/blob/2e102c72b26708147817f8f5e4ab1161a38a57a0/compressed/showdown.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:159ea12332b4900d1851f15ae9c2dee5 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/coreyti/showdown/blob/master/compressed/showdown.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/coreyti/showdown/tree/v0.3.1/compressed/showdown.js"
                 data-name="v0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.3.1">v0.3.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/coreyti/showdown/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="compressed/showdown.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/coreyti/showdown" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">showdown</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/coreyti/showdown/tree/master/compressed" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">compressed</span></a></span><span class="separator"> / </span><strong class="final-path">showdown.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Corey Innis" class="avatar" data-user="4937" height="24" src="https://avatars3.githubusercontent.com/u/4937?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/coreyti" rel="author">coreyti</a></span>
        <time datetime="2012-11-02T03:18:47-07:00" is="relative-time">November 02, 2012</time>
        <div class="commit-title">
            <a href="/coreyti/showdown/commit/2e102c72b26708147817f8f5e4ab1161a38a57a0" class="message" data-pjax="true" title="update output files">update output files</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>2</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="coreyti" href="/coreyti/showdown/commits/master/compressed/showdown.js?author=coreyti"><img alt="Corey Innis" class="avatar" data-user="4937" height="20" src="https://avatars1.githubusercontent.com/u/4937?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="remy" href="/coreyti/showdown/commits/master/compressed/showdown.js?author=remy"><img alt="Remy Sharp" class="avatar" data-user="13700" height="20" src="https://avatars0.githubusercontent.com/u/13700?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Corey Innis" data-user="4937" height="24" src="https://avatars3.githubusercontent.com/u/4937?v=2&amp;s=48" width="24" />
            <a href="/coreyti">coreyti</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Remy Sharp" data-user="13700" height="24" src="https://avatars2.githubusercontent.com/u/13700?v=2&amp;s=48" width="24" />
            <a href="/remy">remy</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>62 lines (62 sloc)</span>
          <span class="meta-divider"></span>
        <span>11.304 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/coreyti/showdown/raw/master/compressed/showdown.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/coreyti/showdown/blame/master/compressed/showdown.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/coreyti/showdown/commits/master/compressed/showdown.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/coreyti/showdown/edit/master/compressed/showdown.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/coreyti/showdown/delete/master/compressed/showdown.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="c1">// showdown.js -- A javascript port of Markdown.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="c1">// Copyright (c) 2007 John Fraser.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="c1">// Original Markdown Copyright (c) 2004-2005 John Gruber</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="c1">//   &lt;http://daringfireball.net/projects/markdown/&gt;</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="c1">// Redistributable under a BSD-style open source license.</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="c1">// See license.txt for more information.</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="c1">// The full source distribution is at:</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="c1">//				A A L</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="c1">//				T C A</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="c1">//				T K B</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="c1">//   &lt;http://www.attacklab.net/&gt;</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="c1">// Wherever possible, Showdown is a straight, line-by-line port</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="c1">// of the Perl version of Markdown.</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line"><span class="c1">// This is not a normal parser design; it&#39;s basically just a</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="c1">// series of string substitutions.  It&#39;s hard to read and</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line"><span class="c1">// maintain this way,  but keeping Showdown close to the original</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line"><span class="c1">// design makes it easier to port new features.</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="c1">// More importantly, Showdown behaves like markdown.pl in most</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line"><span class="c1">// edge cases.  So web applications can do client-side preview</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line"><span class="c1">// in Javascript, and then build identical HTML on the server.</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line"><span class="c1">// This port needs the new RegExp functionality of ECMA 262,</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line"><span class="c1">// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line"><span class="c1">// should do fine.  Even with the new regular expression features,</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line"><span class="c1">// We do a lot of work to emulate Perl&#39;s regex functionality.</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line"><span class="c1">// The tricky changes in this file mostly have the &quot;attacklab:&quot;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line"><span class="c1">// label.  Major or self-explanatory changes don&#39;t.</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line"><span class="c1">// Smart diff tools like Araxis Merge will be able to match up</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line"><span class="c1">// this file with markdown.pl in a useful way.  A little tweaking</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line"><span class="c1">// helps: in a copy of markdown.pl, replace &quot;#&quot; with &quot;//&quot; and</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line"><span class="c1">// replace &quot;$text&quot; with &quot;text&quot;.  Be sure to ignore whitespace</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line"><span class="c1">// and line endings.</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line"><span class="c1">// Showdown usage:</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line"><span class="c1">//   var text = &quot;Markdown *rocks*.&quot;;</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line"><span class="c1">//   var converter = new Showdown.converter();</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line"><span class="c1">//   var html = converter.makeHtml(text);</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line"><span class="c1">//   alert(html);</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line"><span class="c1">// Note: move the sample code to the bottom of this</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line"><span class="c1">// file before uncommenting it.</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line"><span class="c1">// Showdown namespace</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line"><span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line"><span class="kd">var</span> <span class="nx">Showdown</span><span class="o">=</span><span class="p">{</span><span class="nx">extensions</span><span class="o">:</span><span class="p">{}},</span><span class="nx">forEach</span><span class="o">=</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">forEach</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">c</span><span class="o">&lt;</span><span class="nx">d</span><span class="p">;</span><span class="nx">c</span><span class="o">++</span><span class="p">)</span><span class="nx">b</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">)}},</span><span class="nx">stdExtName</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[_-]||\s/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()};</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">converter</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="p">[],</span><span class="nx">g</span><span class="o">=</span><span class="p">[];</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span><span class="o">!=</span><span class="s2">&quot;undefind&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">exports</span><span class="o">!=</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">require</span><span class="o">!=</span><span class="s2">&quot;undefind&quot;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;fs&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">readdirSync</span><span class="p">((</span><span class="nx">__dirname</span><span class="o">||</span><span class="s2">&quot;.&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;/extensions&quot;</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="o">~</span><span class="nx">a</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;.js&quot;</span><span class="p">)}).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\.js$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">)});</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">stdExtName</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">extensions</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;./extensions/&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">)})}}</span><span class="k">this</span><span class="p">.</span><span class="nx">makeHtml</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="o">=</span><span class="p">{},</span><span class="nx">c</span><span class="o">=</span><span class="p">{},</span><span class="nx">d</span><span class="o">=</span><span class="p">[],</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~/g</span><span class="p">,</span><span class="s2">&quot;~T&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\$/g</span><span class="p">,</span><span class="s2">&quot;~D&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="s2">&quot;\n\n&quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;\n\n&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">M</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]+$/mg</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">l</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">K</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~D/g</span><span class="p">,</span><span class="s2">&quot;$$&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~T/g</span><span class="p">,</span><span class="s2">&quot;~&quot;</span><span class="p">),</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">)}),</span><span class="nx">a</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">extensions</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">extensions</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">==</span><span class="s2">&quot;string&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">extensions</span><span class="p">[</span><span class="nx">stdExtName</span><span class="p">(</span><span class="nx">a</span><span class="p">)]);</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">!=</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="k">throw</span><span class="s2">&quot;Extension &#39;&quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;&#39; could not be loaded.  It was either not found or is not a valid extension.&quot;</span><span class="p">;</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">a</span><span class="p">(</span><span class="nx">j</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;language&quot;</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;lang&quot;</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;output&quot;</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;html&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)})})}</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">regex</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">regex</span><span class="p">,</span><span class="s2">&quot;g&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">filter</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">b</span><span class="p">)},</span><span class="nx">l</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*&lt;?(\S+?)&gt;?[ \t]*\n?[ \t]*(?:(\n*)[&quot;(](.+?)[&quot;)][ \t]*)?(?:\n+|(?=~0))/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">){</span><span class="k">return</span> <span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">G</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">f</span><span class="o">?</span><span class="nx">f</span><span class="o">+</span><span class="nx">g</span><span class="o">:</span><span class="p">(</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">)),</span><span class="s2">&quot;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">m</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span><span class="s2">&quot;\n\n&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="s2">&quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside&quot;</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n&lt;\/\2&gt;[ \t]*(?=\n+))/gm</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?&lt;\/\2&gt;[ \t]*(?=\n+)\n)/gm</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n[ ]{0,3}(&lt;(hr)\b([^&lt;&gt;])*?\/?&gt;)[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n\n[ ]{0,3}&lt;!(--[^\r]*?--\s*)+&gt;[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:\n\n)([ ]{0,3}(?:&lt;([?%])[^\r]*?\2&gt;)[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">n</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;\n\n~K&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;K\n\n&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">},</span><span class="nx">o</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">v</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">A</span><span class="p">(</span><span class="s2">&quot;&lt;hr /&gt;&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">x</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">E</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">F</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">p</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">B</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">q</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">H</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">r</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">I</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">G</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">D</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/  +\n/g</span><span class="p">,</span><span class="s2">&quot; &lt;br /&gt;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">q</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="sr">/(&lt;[a-z\/!$](&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*&gt;|&lt;!(--.*?--\s*)+&gt;)/gi</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(.)&lt;\/?code&gt;(?=.)/g</span><span class="p">,</span><span class="s2">&quot;$1`&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;\\`*_&quot;</span><span class="p">),</span><span class="nx">b</span><span class="p">}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">r</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g</span><span class="p">,</span><span class="nx">s</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()&lt;?(.*?(?:\(.*?\).*?)?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g</span><span class="p">,</span><span class="nx">s</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[([^\[\]]+)\])()()()()()/g</span><span class="p">,</span><span class="nx">s</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">s</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">){</span><span class="nx">j</span><span class="o">==</span><span class="kc">undefined</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">n</span><span class="o">=</span><span class="nx">g</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="p">){</span><span class="nx">m</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">m</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ ?\n/g</span><span class="p">,</span><span class="s2">&quot; &quot;</span><span class="p">)),</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">m</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">!=</span><span class="kc">undefined</span><span class="p">)</span><span class="nx">n</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">],</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">]);</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">k</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\(\s*\)$/m</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">))</span><span class="k">return</span> <span class="nx">k</span><span class="p">;</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">}}</span><span class="nx">n</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="s1">&#39;&lt;a href=&quot;&#39;</span><span class="o">+</span><span class="nx">n</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">;</span><span class="k">return</span> <span class="nx">o</span><span class="o">!=</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">),</span><span class="nx">p</span><span class="o">+=</span><span class="s1">&#39; title=&quot;&#39;</span><span class="o">+</span><span class="nx">o</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">),</span><span class="nx">p</span><span class="o">+=</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">,</span><span class="nx">p</span><span class="p">},</span><span class="nx">t</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(!\[(.*?)\]\s?\([ \t]*()&lt;?(\S+?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">u</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">n</span><span class="o">=</span><span class="nx">g</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="nx">o</span><span class="o">||</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="p">){</span><span class="nx">m</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">m</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ ?\n/g</span><span class="p">,</span><span class="s2">&quot; &quot;</span><span class="p">)),</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">m</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">==</span><span class="kc">undefined</span><span class="p">)</span><span class="k">return</span> <span class="nx">k</span><span class="p">;</span><span class="nx">n</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">],</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">])}</span><span class="nx">l</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">),</span><span class="nx">n</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="s1">&#39;&lt;img src=&quot;&#39;</span><span class="o">+</span><span class="nx">n</span><span class="o">+</span><span class="s1">&#39;&quot; alt=&quot;&#39;</span><span class="o">+</span><span class="nx">l</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">;</span><span class="k">return</span> <span class="nx">o</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">),</span><span class="nx">p</span><span class="o">+=</span><span class="s1">&#39; title=&quot;&#39;</span><span class="o">+</span><span class="nx">o</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">,</span><span class="nx">p</span><span class="o">+=</span><span class="s2">&quot; /&gt;&quot;</span><span class="p">,</span><span class="nx">p</span><span class="p">},</span><span class="nx">v</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^\w]/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()}</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.+)[ \t]*\n=+[ \t]*\n+/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">A</span><span class="p">(</span><span class="s1">&#39;&lt;h1 id=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">p</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&lt;/h1&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.+)[ \t]*\n-+[ \t]*\n+/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">A</span><span class="p">(</span><span class="s1">&#39;&lt;h2 id=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">p</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&lt;/h2&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">return</span> <span class="nx">A</span><span class="p">(</span><span class="s2">&quot;&lt;h&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s1">&#39; id=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">p</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&lt;/h&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">w</span><span class="p">,</span><span class="nx">x</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="sr">/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm</span><span class="p">;</span><span class="k">return</span> <span class="nx">e</span><span class="o">?</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/[*+-]/g</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="s2">&quot;ul&quot;</span><span class="o">:</span><span class="s2">&quot;ol&quot;</span><span class="p">;</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">,</span><span class="s2">&quot;\n\n\n&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">w</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="k">return</span> <span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="s2">&quot;&lt;&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;&lt;/&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">})</span><span class="o">:</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="sr">/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/[*+-]/g</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="s2">&quot;ul&quot;</span><span class="o">:</span><span class="s2">&quot;ol&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">,</span><span class="s2">&quot;\n\n\n&quot;</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="nx">w</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span><span class="k">return</span> <span class="nx">h</span><span class="o">=</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&lt;&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="o">+</span><span class="nx">h</span><span class="o">+</span><span class="s2">&quot;&lt;/&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="p">,</span><span class="nx">h</span><span class="p">})),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">};</span><span class="nx">w</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">e</span><span class="o">++</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}$/</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="nx">g</span><span class="o">||</span><span class="nx">f</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\n{2,}/</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="nx">f</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">L</span><span class="p">(</span><span class="nx">f</span><span class="p">))</span><span class="o">:</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">x</span><span class="p">(</span><span class="nx">L</span><span class="p">(</span><span class="nx">f</span><span class="p">)),</span><span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">f</span><span class="p">)),</span><span class="s2">&quot;&lt;li&gt;&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;&lt;/li&gt;\n&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">--</span><span class="p">,</span><span class="nx">a</span><span class="p">};</span><span class="kd">var</span> <span class="nx">y</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="nx">d</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">L</span><span class="p">(</span><span class="nx">d</span><span class="p">)),</span><span class="nx">d</span><span class="o">=</span><span class="nx">M</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;&lt;pre&gt;&lt;code&gt;&quot;</span><span class="o">+</span><span class="nx">d</span><span class="o">+</span><span class="s2">&quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;</span><span class="p">,</span><span class="nx">A</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="nx">e</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">z</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="nx">e</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">M</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="s2">&quot;&lt;pre&gt;&lt;code&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="o">?</span><span class="s1">&#39; class=&quot;&#39;</span><span class="o">+</span><span class="nx">d</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;</span><span class="p">,</span><span class="nx">A</span><span class="p">(</span><span class="nx">e</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">A</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^\n+|\n+$)/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="s2">&quot;\n\n~K&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;K\n\n&quot;</span><span class="p">},</span><span class="nx">B</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">;</span><span class="k">return</span> <span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^([ \t]*)/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[ \t]*$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">f</span><span class="p">),</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;&lt;code&gt;&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;&lt;/code&gt;&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">C</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span><span class="s2">&quot;&amp;amp;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span><span class="s2">&quot;&amp;lt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&gt;/g</span><span class="p">,</span><span class="s2">&quot;&amp;gt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;*_{}[]\\&quot;</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">D</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g</span><span class="p">,</span><span class="s2">&quot;&lt;strong&gt;$2&lt;/strong&gt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\*|_)(?=\S)([^\r]*?\S)\1/g</span><span class="p">,</span><span class="s2">&quot;&lt;em&gt;$2&lt;/em&gt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">E</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/((^[ \t]*&gt;[ \t]?.+\n(.+\n)*\n*)+)/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]*&gt;[ \t]?/gm</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]+$/gm</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">c</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|\n)/g</span><span class="p">,</span><span class="s2">&quot;$1  &quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\s*&lt;pre&gt;[^\r]+?&lt;\/pre&gt;)/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^  /mg</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">}),</span><span class="nx">A</span><span class="p">(</span><span class="s2">&quot;&lt;blockquote&gt;\n&quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span><span class="s2">&quot;\n&lt;/blockquote&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">F</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">[],</span><span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">];</span><span class="nx">g</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/~K(\d+)K/g</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\S/</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">g</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^([ \t]*)/g</span><span class="p">,</span><span class="s2">&quot;&lt;p&gt;&quot;</span><span class="p">),</span><span class="nx">g</span><span class="o">+=</span><span class="s2">&quot;&lt;/p&gt;&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">g</span><span class="p">))}</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="k">while</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">search</span><span class="p">(</span><span class="sr">/~K(\d+)K/</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">];</span><span class="nx">h</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\$/g</span><span class="p">,</span><span class="s2">&quot;$$$$&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~K\d+K/</span><span class="p">,</span><span class="nx">h</span><span class="p">)}</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n\n&quot;</span><span class="p">)},</span><span class="nx">G</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g</span><span class="p">,</span><span class="s2">&quot;&amp;amp;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;(?![a-z\/?\$!])/gi</span><span class="p">,</span><span class="s2">&quot;&amp;lt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">H</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\(\\)/g</span><span class="p">,</span><span class="nx">O</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\([`*_{}\[\]()&gt;#+-.!])/g</span><span class="p">,</span><span class="nx">O</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">I</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;((https?|ftp|dict):[^&#39;&quot;&gt;\s]+)&gt;/gi</span><span class="p">,</span><span class="s1">&#39;&lt;a href=&quot;$1&quot;&gt;$1&lt;/a&gt;&#39;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)&gt;/gi</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">J</span><span class="p">(</span><span class="nx">K</span><span class="p">(</span><span class="nx">b</span><span class="p">))}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">J</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;&amp;#&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">},</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;&amp;#x&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">},</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">}];</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="s2">&quot;mailto:&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/./g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">==</span><span class="s2">&quot;@&quot;</span><span class="p">)</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="mi">2</span><span class="p">)](</span><span class="nx">a</span><span class="p">);</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">!=</span><span class="s2">&quot;:&quot;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="o">&gt;</span><span class="p">.</span><span class="mi">9</span><span class="o">?</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">](</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="o">&gt;</span><span class="p">.</span><span class="mi">45</span><span class="o">?</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">](</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">](</span><span class="nx">a</span><span class="p">)}</span><span class="k">return</span> <span class="nx">a</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="s1">&#39;&lt;a href=&quot;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;&gt;.+:/g</span><span class="p">,</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">K</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~E(\d+)E/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">c</span><span class="p">)}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">L</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(\t|[ ]{1,4})/gm</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">M</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t(?=\t)/g</span><span class="p">,</span><span class="s2">&quot;    &quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t/g</span><span class="p">,</span><span class="s2">&quot;~A~B&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~B(.+?)~A/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="mi">4</span><span class="o">-</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">%</span><span class="mi">4</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="nx">d</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="p">;</span><span class="k">return</span> <span class="nx">d</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~A/g</span><span class="p">,</span><span class="s2">&quot;    &quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~B/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">N</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="s2">&quot;([&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([\[\]\\])/g</span><span class="p">,</span><span class="s2">&quot;\\$1&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;])&quot;</span><span class="p">;</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;\\\\&quot;</span><span class="o">+</span><span class="nx">d</span><span class="p">);</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="s2">&quot;g&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">O</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">O</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span><span class="k">return</span><span class="s2">&quot;~E&quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span><span class="s2">&quot;E&quot;</span><span class="p">}},</span><span class="k">typeof</span> <span class="nx">module</span><span class="o">!=</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="o">=</span><span class="nx">Showdown</span><span class="p">),</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">(</span><span class="s2">&quot;showdown&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">Showdown</span><span class="p">});</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04448s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-dce52d0cc1884b841d65bad8688285872c2747ee.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-7b66bb5f3729cea876fe496043569b46ae6383fc.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

