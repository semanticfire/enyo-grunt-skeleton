enyo.kind({
	name: "App",
	classes: "onyx onyx-sample",
	components: [
		{classes: "onyx-sample-divider", content: "EnyoJS - Grunt skeleton"},
		{kind: "onyx.Groupbox", components: [
			{kind: "onyx.GroupboxHeader", content: "Header"},
			{content: "Hello world", style: "padding: 8px;"},
			{content: $L("HelloWorld"), style: "padding: 8px;"}
		]},
		
	]
});
