angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/comp/board/board.html','\n<div class="board uk-grid uk-grid-small">\n    <project\n        ng-repeat="project in projects"\n        project="project"\n        class="project uk-width-medium-1-3"\n        >\n    </project>\n</div>\n');
$templateCache.put('app/comp/footer/footer.html','<div class="tm-footer">\n    <div class="uk-container uk-container-center uk-text-center">\n\n        <ul class="uk-subnav uk-subnav-line uk-flex-center">\n            <li><a href="http://github.com/uikit/uikit">GitHub</a></li>\n            <li><a href="http://github.com/uikit/uikit/issues">Issues</a></li>\n            <li><a href="http://github.com/uikit/uikit/blob/master/CHANGELOG.md">Changelog</a></li>\n            <li><a href="https://twitter.com/getuikit">Twitter</a></li>\n        </ul>\n\n        <div class="uk-panel">\n            <p>Made by <a href="http://www.yootheme.com/">YOOtheme</a> with love and caffeine.<br>Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>\n            <a href="https://getuikit.com/v2/index.html"><img src="./Get started - UIkit documentation_files/logo_uikit.svg" width="90" height="30" title="UIkit" alt="UIkit"></a>\n        </div>\n\n    </div>\n</div>\n');
$templateCache.put('app/comp/header/header.html','<nav \n    class="uk-navbar uk-fixed-navigation"\n    >\n    \n    <a class="uk-navbar-brand uk-hidden-small" ui-sref="home">\n        <img src="img/taskis.png" alt="Taskis">\n        taskis.github.io\n    </a>\n    \n    <ul class="uk-navbar-nav uk-hidden-small">\n        <li ui-sref-active="uk-active">\n            <a ui-sref="board">Board</a>\n        </li>      \n    </ul>\n\n    <ul class="uk-navbar-nav uk-hidden-small uk-float-right">\n        <li ui-sref-active="uk-active">\n            <a href="javascript:;">\n                <i class="uk-icon-plus"></i>\n                Add project\n            </a>\n        </li>      \n    </ul>\n\n    <a \n        href="#offcanvas" \n        class="uk-navbar-toggle uk-visible-small" \n        data-uk-offcanvas=""\n        >            \n    </a>\n\n    <div \n        class="uk-navbar-brand uk-navbar-center uk-visible-small"\n        >      \n        <img src="img/taskis.png" alt="Taskis">\n        Taskis\n    </div>\n    \n</nav>\n\n');
$templateCache.put('app/comp/mobnav/mobnav.html','<div id="tm-offcanvas" class="uk-offcanvas">\n\n    <div class="uk-offcanvas-bar">\n\n        <ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav="{multiple:true}">\n            <li class="uk-parent uk-active uk-open" aria-expanded="true"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#">Documentation</a>\n                <div style="overflow: hidden; height: auto; position: relative;"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/documentation_get-started.html">Get started</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_how-to-customize.html">How to customize</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_layouts.html">Layout examples</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/core.html">Core</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/components.html">Components</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_project-structure.html">Project structure</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_less-sass.html">Less &amp; Sass files</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_create-a-theme.html">Create a theme</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_create-a-style.html">Create a style</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_customizer-json.html">Customizer.json</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_javascript.html">JavaScript</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/documentation_custom-prefix.html">Custom prefix</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-nav-header">Core</li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-wrench"></i> Defaults</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/base.html">Base</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/print.html">Print</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-th-large"></i> Layout</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/grid.html">Grid</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/panel.html">Panel</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/block.html">Block</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/article.html">Article</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/comment.html">Comment</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/utility.html">Utility</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/flex.html">Flex</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/cover.html">Cover</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-bars"></i> Navigations</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/nav.html">Nav</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/navbar.html">Navbar</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/subnav.html">Subnav</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/breadcrumb.html">Breadcrumb</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/pagination.html">Pagination</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/tab.html">Tab</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/thumbnav.html">Thumbnav</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-check"></i> Elements</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/list.html">List</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/description-list.html">Description list</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/table.html">Table</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/form.html">Form</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-folder-open"></i> Common</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/button.html">Button</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/icon.html">Icon</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/close.html">Close</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/badge.html">Badge</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/alert.html">Alert</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/thumbnail.html">Thumbnail</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/overlay.html">Overlay</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/text.html">Text</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/column.html">Column</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/animation.html">Animation</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/contrast.html">Contrast</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-magic"></i> JavaScript</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/dropdown.html">Dropdown</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/modal.html">Modal</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/offcanvas.html">Off-canvas</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/switcher.html">Switcher</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/toggle.html">Toggle</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/scrollspy.html">Scrollspy</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/smooth-scroll.html">Smooth scroll</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-nav-header">Components</li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-th-large"></i> Layout</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/grid-js.html">Dynamic Grid</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/grid-parallax.html">Parallax Grid</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-bars"></i> Navigations</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/dotnav.html">Dotnav</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/slidenav.html">Slidenav</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/pagination-js.html">Dynamic Pagination</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-folder-open"></i> Common</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/form-advanced.html">Form advanced</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/form-file.html">Form file</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/form-password.html">Form password</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/form-select.html">Form select</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/placeholder.html">Placeholder</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/progress.html">Progress</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-parent" aria-expanded="false"><a href="https://getuikit.com/v2/docs/documentation_get-started.html#"><i class="uk-icon-magic"></i> JavaScript</a>\n                <div style="overflow:hidden;height:0;position:relative;" class="uk-hidden"><ul class="uk-nav-sub" role="menu">\n                    <li><a href="https://getuikit.com/v2/docs/lightbox.html">Lightbox</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/autocomplete.html">Autocomplete</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/datepicker.html">Datepicker</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/htmleditor.html">HTML editor</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/slider.html">Slider</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/slideset.html">Slideset</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/slideshow.html">Slideshow</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/parallax.html">Parallax</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/accordion.html">Accordion</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/notify.html">Notify</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/search.html">Search</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/nestable.html">Nestable</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/sortable.html">Sortable</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/sticky.html">Sticky</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/timepicker.html">Timepicker</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/tooltip.html">Tooltip</a></li>\n                    <li><a href="https://getuikit.com/v2/docs/upload.html">Upload</a></li>\n                </ul></div>\n            </li>\n            <li class="uk-nav-divider"></li>\n            <li><a href="https://getuikit.com/v2/showcase/index.html">Showcase</a></li>\n            <li><a href="https://getuikit.com/v2/docs/tutorials.html">Tutorials</a></li>\n            <li><a href="https://getuikit.com/">UIkit 3</a></li>\n        </ul>\n\n    </div>\n\n</div>\n\n');
$templateCache.put('app/comp/project/project.html','<div class="uk-panel uk-panel-box uk-panel-box-secondary uk-margin-bottom">\n\n    {{ project }}\n\n    <div class="main-buttons uk-float-right">\n        <div class="uk-button-group">                \n            <button class="uk-button uk-button-small hook-project-modify">\n                <i class="uk-icon-pencil"></i>                    \n            </button>\n            <button class="uk-button uk-button-small hook-project-delete">\n                <i class="uk-icon-remove"></i>\n            </button>\n        </div>\n    </div>\n\n    <h3 class="uk-panel-title">\n        {{ project.title }}\n    </h3>\n  \n    <div class="widget-body">        \n        <tasks project="project">\n        \n        \n        </tasks>            \n    </div>\n  \n</div>\n');
$templateCache.put('app/comp/sidebar/sidebar.html','<div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small uk-row-first">\n\n    <ul class="tm-nav uk-nav" data-uk-nav="">\n\n        <li class="uk-nav-header">Beginners</li>\n        <li class="uk-active"><a href="https://getuikit.com/v2/docs/documentation_get-started.html">Get started</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_how-to-customize.html">How to customize</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_layouts.html">Layout examples</a></li>\n        <li class="uk-nav-header">Developers</li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_project-structure.html">Project structure</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_less-sass.html">Less &amp; Sass files</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_create-a-theme.html">Create a theme</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_create-a-style.html">Create a style</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_customizer-json.html">Customizer.json</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_javascript.html">JavaScript</a></li>\n        <li><a href="https://getuikit.com/v2/docs/documentation_custom-prefix.html">Custom prefix</a></li>\n\n    </ul>\n\n</div>\n');
$templateCache.put('app/comp/tasklist/tasklist.html','\n<div \n    class="task"\n    ng-class="{completed:completed}"\n    ng-repeat="task in tasklist"\n    ng-init="completed = task.status == \'completed\'"\n    >\n    <label>\n        <input \n            type="checkbox" \n            class="uk-checkbox"\n            ng-model="completed"\n            ng-change="$ctrl.change(task)"\n            />\n        <span class="caption">\n            <span class="label" ng-bind-html="task.title | taskline"></span>\n            <span class="controls">\n                <a ng-click="remove(task)"><i class="uk-icon-remove"></i></a>\n            </span>\n        </span>     \n    </label> \n</div>\n');
$templateCache.put('app/comp/topbar/topbar.html','<nav class="tm-navbar uk-navbar uk-navbar-attached">\n    <div class="uk-container uk-container-center">\n\n        <a class="uk-navbar-brand uk-hidden-small" href="https://getuikit.com/v2/index.html"><img class="uk-margin uk-margin-remove" src="./Get started - UIkit documentation_files/logo_uikit.svg" width="90" height="30" title="UIkit" alt="UIkit"></a>\n\n        <ul class="uk-navbar-nav uk-hidden-small">\n            <li class="uk-active"><a href="https://getuikit.com/v2/docs/documentation_get-started.html">Get Started</a></li>\n            <li><a href="https://getuikit.com/v2/docs/core.html">Core</a></li>\n            <li><a href="https://getuikit.com/v2/docs/components.html">Components</a></li>\n            <li><a href="https://getuikit.com/v2/docs/customizer.html">Customizer</a></li>\n            <li><a href="https://getuikit.com/v2/showcase/index.html">Showcase</a></li>\n            <li><a href="https://getuikit.com/v2/docs/tutorials.html">Tutorials</a></li>\n            <li><a href="https://getuikit.com/">UIkit 3</a></li>\n        </ul>\n\n        <a href="https://getuikit.com/v2/docs/documentation_get-started.html#tm-offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""></a>\n\n        <div class="uk-navbar-brand uk-navbar-center uk-visible-small"><img src="./Get started - UIkit documentation_files/logo_uikit.svg" width="90" height="30" title="UIkit" alt="UIkit"></div>\n\n    </div>\n</nav>\n');
$templateCache.put('app/comp/layout/layout.html','\n<header></header>\n\n<div class="view" ui-view></div>\n');}]);