/**
 * ...
 * @author Alexandre
 */

var rand = 0;

$(function () {
	// TO CREATE AN INSTANCE
	// select the tree container using jQuery
	$("#arvore")
		// call `.jstree` with the options object
		.jstree({
        // the `plugins` array allows you to configure the active plugins on this instance
		"plugins" : ["themes","html_data","ui","crrm","hotkeys", "types"],
		"themes" : {
			"theme" : "classic",
		},
		"types" : {
			// I set both options to -2, as I do not need depth and children count checking
			// Those two checks may slow jstree a lot, so use only when needed
			//"max_depth" : -2,
			//"max_children" : -2,
			// I want only `drive` nodes to be root nodes 
			// This will prevent moving or creating any other type as a root node
			//"valid_children" : [ "drive" ],
			"types" : {
				// The default type
				"ini" : {
					// I want this type to have no children (so only leaf nodes)
					// In my case - those are files
					//"valid_children" : "none",
					// If we specify an icon for the default type it WILL OVERRIDE the theme icons
					"icon" : {
						"image" : "images/pasta01a.gif"
					}
				},
				"sub1" : {
					// I want this type to have no children (so only leaf nodes)
					// In my case - those are files
					//"valid_children" : "none",
					// If we specify an icon for the default type it WILL OVERRIDE the theme icons
					"icon" : {
						"image" : "images/pasta02a.gif"
					}
				},
				"sub2" : {
					// I want this type to have no children (so only leaf nodes)
					// In my case - those are files
					//"valid_children" : "none",
					// If we specify an icon for the default type it WILL OVERRIDE the theme icons
					"icon" : {
						"image" : "images/pasta03a.gif"
					}
				},
				"sub3" : {
					// I want this type to have no children (so only leaf nodes)
					// In my case - those are files
					//"valid_children" : "none",
					// If we specify an icon for the default type it WILL OVERRIDE the theme icons
					"icon" : {
						"image" : "images/pasta04a.gif"
					}
				},
				"sub4" : {
					// I want this type to have no children (so only leaf nodes)
					// In my case - those are files
					//"valid_children" : "none",
					// If we specify an icon for the default type it WILL OVERRIDE the theme icons
					"icon" : {
						"image" : "images/pasta05a.gif"
					}
				},
				"final" : {
					// I want this type to have no children (so only leaf nodes)
					// In my case - those are files
					//"valid_children" : "none",
					// If we specify an icon for the default type it WILL OVERRIDE the theme icons
					"icon" : {
						"image" : "images/root.png"
					}
				}
			}
		}})
		// EVENTS
		// each instance triggers its own events - to process those listen on the container
		// all events are in the `.jstree` namespace
		// so listen for `function_name`.`jstree` - you can function names from the docs
		//.bind("loaded.jstree", function (event, data) {
			// you get two params - event & data - check the core docs for a detailed description
		//});
		/*
		.bind("select_node.jstree", function (event, data) {
            // `data.rslt.obj` is the jquery extended node that was clicked
            //alert(data.rslt.obj.attr("id"));
			objc = $("#" + data.rslt.obj.attr("id") + "_text").html();
			//alert(objc.html());
			//alert($("#" + data.rslt.obj.attr("id") + " a").html().split("</ins>")[1]);
			//titulo = $("#" + data.rslt.obj.attr("id") + " a").html().split("</ins>")[1];
			if(objc != undefined) $("#dialog").html(objc);
			else {
				if(rand == 0)$("#dialog").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ante sagittis dui sollicitudin facilisis. In hac habitasse platea dictumst. Vestibulum ligula odio, semper nec ornare ac, porta quis ligula. Nulla mollis, nulla at vestibulum vulputate, tortor tellus placerat tellus, dictum suscipit lectus tellus quis dui. Donec elementum blandit augue, id feugiat quam posuere et. In venenatis varius velit, nec lobortis lacus adipiscing a. Suspendisse nec ornare turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sodales velit eu lorem varius fringilla. Nulla et mi et mauris lobortis condimentum vel ac ligula. Proin quis lectus nec felis venenatis ullamcorper id laoreet mi. Mauris vulputate ullamcorper elit, at facilisis sem rutrum id. Nunc in quam leo. \nMauris sed vulputate mauris. Suspendisse nec purus ac ante congue rhoncus ut vel nibh. In id purus dui, vitae iaculis sapien. Donec laoreet, mauris sit amet aliquet lacinia, orci elit faucibus quam, ac ultricies eros eros gravida turpis. Curabitur tristique tortor quis purus tincidunt iaculis. Duis lectus magna, interdum et tincidunt in, lobortis nec leo. Nam condimentum, ipsum laoreet vehicula accumsan, lectus lorem posuere augue, ut pulvinar nisi augue et mauris. Nam iaculis nisl at nibh feugiat congue. Aenean placerat, purus sit amet porta bibendum, magna dolor ultricies tellus, sit amet elementum nunc elit vitae dolor. Mauris dictum, quam eget mollis dapibus, metus orci ultrices metus, at laoreet sem neque eu felis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer at pretium diam. Cras dignissim rhoncus ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet enim vitae felis mollis nec placerat mi auctor. Phasellus eleifend, metus et tristique suscipit, mi mi suscipit nisl, eget tempus lectus velit id magna. Sed congue malesuada consequat. Ut vitae nunc eros. Sed quis egestas lacus. Praesent enim nisi, aliquet vitae mattis eget, vulputate nec ante. Donec id massa eu orci porta adipiscing sit amet a mauris. Suspendisse et porttitor tellus. Vestibulum pharetra laoreet porta. Vestibulum eu gravida odio. Donec auctor tempor faucibus. Mauris sed erat justo, in luctus nunc. Phasellus eleifend mauris eget urna egestas commodo nec pellentesque eros. Morbi placerat facilisis justo non rhoncus. Nam in odio quis odio lobortis dignissim. Nullam neque diam, congue ac rutrum eget, luctus vitae purus.");
				else if(rand == 1) $("#dialog").html("Nullam imperdiet metus at arcu egestas nec pretium elit accumsan. Maecenas at purus a ante ornare hendrerit non a augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam sit amet mattis massa. Aliquam sed urna mauris, et consequat metus. Donec velit lorem, molestie id ultricies vitae, luctus vel lorem. Aliquam sodales mi nec neque varius congue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vehicula, sapien ac consequat venenatis, odio metus tempor nisi, sed imperdiet velit justo sed orci.");
				else if(rand == 2) $("#dialog").html("Duis in odio quam, accumsan consequat turpis. Aliquam a lorem quam. Praesent eu nibh risus, et faucibus diam. In hac habitasse platea dictumst. Donec consectetur, ligula sed blandit auctor, nulla velit fringilla nibh, id porttitor metus est malesuada sapien. Sed eget turpis libero, id tincidunt magna. Etiam vitae enim nisl, a dictum metus. Duis a quam quis mi dictum faucibus. Proin orci est, vestibulum congue vehicula commodo, consequat sed turpis. Sed feugiat dolor a nisl pulvinar dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris mauris massa, dignissim eu facilisis eu, lobortis sed est. Nulla facilisi. Maecenas purus turpis, dignissim sit amet posuere scelerisque, interdum eget leo.");
				else if(rand == 3) $("#dialog").html("Nam bibendum blandit orci vel aliquet. Donec at venenatis risus. Curabitur placerat accumsan quam, id accumsan massa aliquet et. In ullamcorper egestas mauris, sed laoreet elit pellentesque vitae. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla adipiscing dui at orci fringilla feugiat. Donec eget dolor diam. Vivamus fermentum ultrices consectetur. Duis dapibus dignissim risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.");
				rand++;
				if(rand > 3) rand = 0;
			}
			
			/*
			$( "#dialog" ).dialog();
			$( "#dialog" ).dialog( "option", "title", titulo );
			//$( "#dialog" ).dialog( "option", "draggable", false );
			//$( "#dialog" ).dialog( "option", "resizable", false );
			$( "#dialog" ).dialog( "option", "position", [545,15] );
			$( "#dialog" ).dialog( "option", "width", 600 );
			$( "#dialog" ).dialog( "option", "maxHeight", 600 );
			*/
        //})
		.delegate("a", "click", function (event, data) { event.preventDefault(); })
	// INSTANCES
	// 1) you can call most functions just by selecting the container and calling `.jstree("func",`
	setTimeout(function () { $("#arvore").jstree("set_focus"); }, 500);
	// with the methods below you can call even private functions (prefixed with `_`)
	// 2) you can get the focused instance using `$.jstree._focused()`. 
	//setTimeout(function () { $.jstree._focused().select_node("#phtml_1"); }, 1000);
	// 3) you can use $.jstree._reference - just pass the container, a node inside it, or a selector
	//setTimeout(function () { $.jstree._reference("#phtml_1").close_node("#phtml_1"); }, 1500);
	// 4) when you are working with an event you can use a shortcut
	//$("#arvore").bind("open_node.jstree", function (e, data) {
		// data.inst is the instance which triggered this event
		//data.inst.select_node("#phtml_2", true);
	//});
	//setTimeout(function () { $.jstree._reference("#3.1").open_node("#3.1"); }, 1000);
});


