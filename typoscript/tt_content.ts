// SEO for Typo3
// http://t3n.de/magazin/seo-typo3-leitfaden-professionellen-220942/

lib {
	stdheader {
		stdWrap {
			# remove DIVs in headlines
			dataWrap =
			# remove Comments for Headlines
			prefixComment =
		}
		# remove first class for headlines
		3.headerClass =
		3.headerClass.noTrimWrap =
		# remove break after headlines
		10.stdWrap.wrap =
	}
	# remove empty RTE code
	parseFunc_RTE.nonTypoTagStdWrap {
		encapsLines {
			addAttributes.P.class =
			innerStdWrap_all.ifEmpty =
		}
		# make HTML semantic
		HTMLparser {
			tags {
				b.remap = strong
				i.remap = em
			}
		}
	}
}

tt_content {
	# remove comments for content elemenets
	stdWrap.prefixComment =
	# remove comments for text elements
	text.20.prefixComment =
	# remove comments for list elements
	bullets.20.stdWrap.prefixComment =
	# remove comments for table elements
	table.20.stdWrap.prefixComment =
	# remove A
	stdWrap.dataWrap =
	stdWrap.prepend.dataWrap =
	html.prefixComment =
	div.wrap =
}

# disable the standard stylesheet
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >

# reset the a-tag
NO.ATagTitle.field = description // subtitle // title

// CSS styled content
tt_content.image.20 = USER
tt_content.image.20 {
	imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap" style="width:{register:totalwidth}px;"> | </div>
	imageStdWrapNoWidth.wrap = <div class="csc-textpic-imagewrap"> | </div>
	imageColumnStdWrap.dataWrap = <div class="csc-textpic-imagecolumn" style="width:{register:columnwidth}px;"> | </div>

	layout = CASE
	layout {
		key.field = imageorient
		default = TEXT
		default.value = <div class="csc-textpic csc-textpic-center csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
		1 = TEXT
		1.value = <div class="csc-textpic csc-textpic-right csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
		2 = TEXT
		2.value = <div class="csc-textpic csc-textpic-left csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
		8 = TEXT
		8.value = <div class="csc-textpic csc-textpic-center csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
		9 = TEXT
		9.value = <div class="csc-textpic csc-textpic-right csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
		10 = TEXT
		10.value = <div class="csc-textpic csc-textpic-left csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
		17 = TEXT
		17.value = <div class="csc-textpic csc-textpic-intext-right###CLASSES###">###IMAGES######TEXT###</div>
		18 = TEXT
		18.value = <div class="csc-textpic csc-textpic-intext-left###CLASSES###">###IMAGES######TEXT###</div>
		#25 = TEXT
		#25.value = <div class="csc-textpic csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES###<div style="margin-right:{register:rowWidthPlusTextMargin}px;">###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
		#25.insertData = 1
		#26 = TEXT
		#26.value = <div class="csc-textpic csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES###<div style="margin-left:{register:rowWidthPlusTextMargin}px;">###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
		#26.insertData = 1
		25 = TEXT
		25.value = <div class="csc-textpic csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES###<div>###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
		25.insertData = 1
		26 = TEXT
		26.value = <div class="csc-textpic csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES###<div>###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
		26.insertData = 1
	}
	
	#imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap" style="width:{register:totalwidth}px;"> | </div>
	imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap" > | </div>
	
	rendering {
		dl {
			#imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"> | </div>
			imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" > | </div>
			noRowsStdWrap.wrap =
			#oneImageStdWrap.dataWrap = <dl class="csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </dl>
			# eigene Anpassung
			oneImageStdWrap.dataWrap = <dl class="csc-textpic-image###CLASSES###" > | </dl>
			imgTagStdWrap.wrap = <dt> | </dt>
			editIconsStdWrap.wrap = <dd> | </dd>
			caption.wrap = <dd class="csc-textpic-caption"> | </dd>
		}
		ul {
			#imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"><ul> | </ul></div>
			imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" ><ul> | </ul></div>
			#imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last" style="width:{register:rowwidth}px;"><ul> | </ul></div>
			imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"><ul> | </ul></div>
			noRowsStdWrap.wrap = <ul> | </ul>
			#oneImageStdWrap.dataWrap = <li class="csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </li>
			oneImageStdWrap.dataWrap = <li class="csc-textpic-image###CLASSES###"> | </li>
			imgTagStdWrap.wrap =
			editIconsStdWrap.wrap = <div> | </div>
			caption.wrap = <div class="csc-textpic-caption"> | </div>
		}
		div {
			#imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"> | </div>
			imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" > | </div>
			imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" > | </div>
			noRowsStdWrap.wrap =
			#oneImageStdWrap.dataWrap = <div class="csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </div>
			oneImageStdWrap.dataWrap = <div class="csc-textpic-image###CLASSES###" > | </div>
			imgTagStdWrap.wrap = <div> | </div>
			editIconsStdWrap.wrap = <div> | </div>
			caption.wrap = <div class="csc-textpic-caption"> | </div>
		}
	}
	renderMethod = dl
}