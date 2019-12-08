(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/flink-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("源笔记文件"),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("\n本节内容对应"),s("a",{attrs:{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/zh/dev/batch/#semantic-annotations",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("，本节内容对应"),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced/blob/master/src/main/scala/io/gourd/flink/scala/games/batch/SemanticAnnotations.scala",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例源码"),s("OutboundLink")],1)])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-forwarded-fields-annotation（转发字段注解）"}},[t._v("1 Forwarded Fields Annotation（转发字段注解）")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-函数类注释"}},[t._v("1.1 函数类注释")])]),s("li",[s("a",{attrs:{href:"#_1-2-运算符参数"}},[t._v("1.2 运算符参数")])])])]),s("li",[s("a",{attrs:{href:"#_2-non-forwarded-fields（非转发字段注解）"}},[t._v("2 Non-Forwarded Fields（非转发字段注解）")])]),s("li",[s("a",{attrs:{href:"#_3-read-fields-读取字段注解"}},[t._v("3 Read Fields(读取字段注解)")])])])]),s("p"),t._v(" "),s("p",[t._v("语义注解可用于为Flink提供有关函数行为的提示。它们告诉系统函数读取和评估函数输入的哪些字段，以及未修改的函数将哪些字段从其输入转发到输出。"),s("br"),t._v("\n语义注解是加快执行速度的强大方法，因为它们使系统能够推理出在多个操作之间重用排序顺序或分区。"),s("br"),t._v("\n使用语义注解最终可以使程序免于不必要的数据改组或不必要的排序，并显着提高程序的性能。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：语义注解的使用是可选的。但是，在提供语义注解时保守是绝对至关重要的！错误的语义注解将导致Flink对您的程序做出错误的假设，并最终可能导致错误的结果。如果操作员的行为无法明确预测，则不应提供注释。请仔细阅读文档。")])]),t._v(" "),s("h2",{attrs:{id:"_1-forwarded-fields-annotation（转发字段注解）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-forwarded-fields-annotation（转发字段注解）"}},[t._v("#")]),t._v(" 1 Forwarded Fields Annotation（转发字段注解）")]),t._v(" "),s("p",[t._v("转发字段信息声明了输入字段，该字段未经修改就被函数转发到输出中的相同位置或另一个位置。"),s("br"),t._v("\n优化器使用此信息来推断函数是否保留了诸如排序或分区之类的数据属性。")]),t._v(" "),s("p",[t._v("使用字段表达式指定字段转发信息。可以通过其位置指定转发到输出中相同位置的字段。指定的位置必须对输入和输出数据类型有效，并且必须具有相同的类型。")]),t._v(" "),s("p",[s("strong",[t._v("转发规则语法")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("SingleInputUdfOperator（withForwardedFields）")]),t._v(" 语法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("dataUnix->_1")]),t._v("  表示将class中dataUnix转发到scala元组的第一个位置")]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v("             表示全部字段转发")]),t._v(" "),s("li",[s("code",[t._v("*->_2")]),t._v("         表示部字段转发到scala元组的第二个位置")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("TwoInputUdfOperator")]),t._v(" 语法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("withForwardFieldsFirst")]),t._v("      函数的第一个输入规则定义，定义内容语法与 withForwardedFields 一致")]),t._v(" "),s("li",[s("code",[t._v("withForwardedFieldsSecond")]),t._v("   函数的第二个输入规则定义，定义内容语法与 withForwardedFields 一致")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("object "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ForwardedFields")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BatchExecutionEnvironmentApp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户登录数据 DataSet")]),t._v("\n  val userLoginDs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userLogin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  val rolePayDs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rolePay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  userLoginDs\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyForwardedFieldsMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withForwardedFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataUnix->_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uid->_2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status->_3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withForwardedFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withForwardedFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_2->_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*->_2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rolePayDs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equalTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withForwardedFieldsFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_1->_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_2->_2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withForwardedFieldsSecond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rid->_3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n  * 自定义 map 实现函数，操作累加器示例\n  * (Int, String, String) => (时间，用户ID,用户登录状态)\n  */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyForwardedFieldsMap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MapFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserLogin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  override def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserLogin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataUnix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-1-函数类注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-函数类注释"}},[t._v("#")]),t._v(" 1.1 函数类注释")]),t._v(" "),s("ul",[s("li",[t._v("@ForwardedFields 用于诸如Map和Reduce的单一输入功能。")]),t._v(" "),s("li",[t._v("@ForwardedFieldsFirst 具有两个输入（例如Join和CoGroup）的函数的第一个输入。")]),t._v(" "),s("li",[t._v("@ForwardedFieldsSecond 具有两个输入（例如Join和CoGroup）的函数的第二个输入。")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-运算符参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-运算符参数"}},[t._v("#")]),t._v(" 1.2 运算符参数")]),t._v(" "),s("ul",[s("li",[t._v("data.map(myMapFnc).withForwardedFields() 用于单个输入功能，例如Map和Reduce。")]),t._v(" "),s("li",[t._v("data1.join(data2).where().equalTo().with(myJoinFnc).withForwardFieldsFirst() 具有两个输入（例如Join和CoGroup）的函数的第一个输入。")]),t._v(" "),s("li",[t._v("data1.join(data2).where().equalTo().with(myJoinFnc).withForwardFieldsSecond() 具有两个输入（例如Join和CoGroup）的函数的第二个输入。")])]),t._v(" "),s("h2",{attrs:{id:"_2-non-forwarded-fields（非转发字段注解）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-non-forwarded-fields（非转发字段注解）"}},[t._v("#")]),t._v(" 2 Non-Forwarded Fields（非转发字段注解）")]),t._v(" "),s("p",[t._v("声明了非转发字段，未声明的默认为转发字段")]),t._v(" "),s("blockquote",[s("p",[t._v("具有相反语义的声明方式与转发字段一致，且仅可通过注解方式声明")])]),t._v(" "),s("ul",[s("li",[t._v("[[org.apache.flink.api.java.functions.FunctionAnnotation.NonForwardedFields]]")]),t._v(" "),s("li",[t._v("[[org.apache.flink.api.java.functions.FunctionAnnotation.NonForwardedFieldsFirst]]")]),t._v(" "),s("li",[t._v("[[org.apache.flink.api.java.functions.FunctionAnnotation.NonForwardedFieldsSecond]]")])]),t._v(" "),s("h2",{attrs:{id:"_3-read-fields-读取字段注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-read-fields-读取字段注解"}},[t._v("#")]),t._v(" 3 Read Fields(读取字段注解)")]),t._v(" "),s("p",[t._v("读取字段信息声明所有由函数访问和评估的字段，即函数使用的所有字段来计算其结果。")]),t._v(" "),s("p",[t._v("例如，在指定读取字段信息时，必须将在条件语句中评估或用于计算的字段标记为已读。只有未经修改的字段转发到输出，而不评估其值或根本不被访问的字段不被视为被读取。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ReadFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_1; _4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _1 and _4 2个字段分别用于函数条件语句判断与结果计算.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyMap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MapFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);