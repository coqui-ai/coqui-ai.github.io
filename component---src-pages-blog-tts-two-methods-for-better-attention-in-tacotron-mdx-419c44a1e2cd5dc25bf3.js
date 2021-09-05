(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{HlG9:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return r})),a.d(e,"default",(function(){return d}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("KLL9"),s=["components"],r={},l={pageQuery:"3484569904",_frontmatter:r},c=i.a;function d(t){var e=t.components,a=Object(n.a)(t,s);return Object(o.b)(c,Object.assign({},l,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this post, I’d like to introduce two methods that, in my experience, worked\nwell for better attention alignment in Tacotron models. If you like to try your\nown, you can visit ",Object(o.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS"},"Coqui TTS"),". The first\nmethod is ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1907.09006"},"Bidirectional Decoder")," and the\nsecond is ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1308.0850"},"Graves Attention")," (Gaussian\nAttention) with small tweaks."),Object(o.b)("h3",{id:"bidirectional-decoder",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#bidirectional-decoder","aria-label":"bidirectional decoder permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Bidirectional Decoder"),Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.4%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxElEQVQoz1VSyY7TQBDN/x858QdI3EBzQSAktkEsChKZiIyTjOPYcWLHjp12L+7Nj7KdBFHS62rV8rqqqyYgcb4j+AG9dARLNus8OrLl+wTheoV4u8E6WICzMzqr4Y26RNPZjXrSJ/nxPrgeXz/H5vOrwWYIWgnwmEj2IbRoUC9/gpcH8N0KKgthjIFz7kY6IT5wznEqS1giWH19i3T+HaeH9zhO72CsR0OEMvkDyys06ylkvkUdLSDSFfktlJLU3Ug6cUTScIEkPYCxBu3YNeosRpkswaWGIK2JxAkGsZlBH7dQu2DQHcWzikMJPRIK7VBJh7DgSMkR7Eu0ph3a31YdSt5CWYXWaRiCuNwlaeMNRN0iC2uwQo4tWyrR04cJY8FaSrJjhU/1HotTRDaDH9USC5agNhwfj3NEIsfsHGHJ0yFWcAmtzXUo3W1SvbwI7vFmN8OXwxTvok/g1MGMxQhkirNX+NWECGWGByIM2I6IqFopqSj3j3BYkcvKPJvf4WV4fxt7YzS+RXP8TgLEeYoPT1MEZYKgOSCRxTDh68oMLfdHv4f+sotXMTT+Hv1D+alEXhTISgJpJgQc5Rlv6c3/9/AvW26v6PezQ78AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/e7f08e2cac087f13ae1c38673c41f046/da8b6/blog-tts-two-methods-for-better-attention-in-tacotron-architecture.png",srcSet:["/static/e7f08e2cac087f13ae1c38673c41f046/43fa5/blog-tts-two-methods-for-better-attention-in-tacotron-architecture.png 250w","/static/e7f08e2cac087f13ae1c38673c41f046/c6e3d/blog-tts-two-methods-for-better-attention-in-tacotron-architecture.png 500w","/static/e7f08e2cac087f13ae1c38673c41f046/da8b6/blog-tts-two-methods-for-better-attention-in-tacotron-architecture.png 1000w","/static/e7f08e2cac087f13ae1c38673c41f046/d2a27/blog-tts-two-methods-for-better-attention-in-tacotron-architecture.png 1419w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"Bidirectional decoding uses an extra decoder which takes the encoder outputs in\nthe reverse order and then, there is an extra loss function that compares the\noutput states of the forward decoder with the backward one. With this\nadditional loss, the forward decoder models what it needs to expect for the\nnext iterations. In this regard, the backward decoder punishes bad decisions of\nthe forward decoder and vice versa."),Object(o.b)("p",null,"Intuitively, if the forward decoder fails to align the attention, that would\ncause a big loss and ultimately it would learn to go monotonically through the\nalignment process with a correction induced by the backward decoder. Therefore,\nthis method is able to prevent “catastrophic failure” where the attention falls\napart in the middle of a sentence and it never aligns again."),Object(o.b)("p",null,"At the inference time, the paper suggests to only use the forward decoder and\ndemote the backward decoder. However, it is possible to think more elaborate\nways to combine these two models."),Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"727px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABh0lEQVQY00WQSy9DURSFT9GHUmLiXxgYVFT0oW5bWnr1treP0EETiURLNZHoa2Ri5g+YGogYGRRRDeJRIZQqEkkHfgRVatn3Ek6ys5OzvrP2XofF+pMwswk4VAHYlX7YW6ia/eDUItzdETy+HAP4QqlQAaclpjUg6xLnIJ5TeMHrIji/3iaqBjbTuwgDc8LKBFiYh2qCSoBJ4YFTG0KxWoR0bvbLMEma0vvHDVE3MjdcqknsXOyijnewWf0SgW6aKsLW5AOnCcDWFiRYAN8xhb3KPRpkWDooY5h5wSlFcO0hSuCHTeGTOY8ujI3DE7ziEyzaJxnycKgpii4ImyYgm1vpMd8VRv7ygaKQYaFM8Xw0VKS4NFwblHmJEzrD2Myd4a3RAJvuSUDPRiiiIK9vZONyNzAX/auIQv5OjnxNfYDuBn/1H44nzo1RWmZr/Qi1Om24Gl9D1JJGYiiLuDmD2GASC5Ys5o0pJMeWcXv6JBs+l6qIm9KkZf456nN0l/Kt4CR3hXrtA998YAbjGk7mYQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/927f7566bf5e778d1a19f43f88a53bae/b5a20/blog-tts-two-methods-for-better-attention-in-tacotron-alignment.png",srcSet:["/static/927f7566bf5e778d1a19f43f88a53bae/43fa5/blog-tts-two-methods-for-better-attention-in-tacotron-alignment.png 250w","/static/927f7566bf5e778d1a19f43f88a53bae/c6e3d/blog-tts-two-methods-for-better-attention-in-tacotron-alignment.png 500w","/static/927f7566bf5e778d1a19f43f88a53bae/b5a20/blog-tts-two-methods-for-better-attention-in-tacotron-alignment.png 727w"],sizes:"(max-width: 727px) 100vw, 727px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"There are 2 main pitfalls of this method. The first, due to additional\nparameters of the backward decoder, it is slower to train this model (almost\n2x) and this makes a huge difference especially when the reduction rate is low\n(number of frames the model generates per iteration). The second, if the\nbackward decoder penalizes the forward one too harshly, that causes overall\nprosody degradation. Due to this the paper suggests activating the additional\nloss just for fine-tuning."),Object(o.b)("p",null,"My experience is that Bidirectional training is quite robust against alignment\nproblems and it is especially useful if your dataset is hard. It also almost\naligns after the first epoch. Yes, at inference time, it sometimes causes\npronunciation problems but I solved this by doing the opposite of the paper’s\nsuggestion. Just for an epoch I finetuned the network without the additional\nloss and everything started to work well."),Object(o.b)("h3",{id:"graves-attention",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#graves-attention","aria-label":"graves attention permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Graves Attention"),Object(o.b)("p",null,"Tacotron uses Bahdenau Attention which is a content-based attention method. It\ndoes not consider location information. Therefore, it needs to learn the\nmonotonicity of the alignment just looking into the content which is a hard\nproblem. Tacotron2 uses Location Sensitive Attention which takes into account\nthe previous attention weights. By doing so, it learns the monotonic\nconstraint. But it does not solve all of the problems and you can still\nexperience failures with long or out of domain sentences."),Object(o.b)("p",null,"Graves Attention is an alternative that uses content information to decide how\nfar it needs to go on the alignment per iteration. It does this by using a\nmixture of Gaussian distributions."),Object(o.b)("p",null,"Graves Attention takes the context vector of time t-1 and passes it through\ncouple of fully connected layers (","[FC > ReLU > FC]"," in our model) and estimates\nstep-size, variance and distribution weights for time t. Then the estimated\nstep-size is used to update the mean of Gaussian modes. Analogously, mean is\nthe point of interest t the alignment path, variance is attention window over\nthis point of interest and distribution weight is the importance of each\ndistribution head."),Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"772px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.599999999999998%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnklEQVQY042QjQqEIBCEff+XDAuVyLS0Hytyjl3ouOqCFoYFR7+dVeBSOWfu27YhhABjDKvv+5P/VOIJuK4rnHOQUkJrjZTS1//VdYi4wg6TAJSqLEtUVYW2bW93/iV+TDjPMwNjjBiGAfu+nx7TBq8SHp2A3nsURQFrLeq6Rtd1aJqGEyul+I9frUyiBMfa0zSx6GwcRwaTtyzLDfgBqTjW6fhwktgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/d1ceb96f942ada9348462e66567f5718/5a533/blog-tts-two-methods-for-better-attention-in-tacotron-equation.png",srcSet:["/static/d1ceb96f942ada9348462e66567f5718/43fa5/blog-tts-two-methods-for-better-attention-in-tacotron-equation.png 250w","/static/d1ceb96f942ada9348462e66567f5718/c6e3d/blog-tts-two-methods-for-better-attention-in-tacotron-equation.png 500w","/static/d1ceb96f942ada9348462e66567f5718/5a533/blog-tts-two-methods-for-better-attention-in-tacotron-equation.png 772w"],sizes:"(max-width: 772px) 100vw, 772px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"Formulated as I compute the alignment in my implementation. Here g, b, and k\nare intermediate values, 𝛿 is the step size, σ is the variance, and\nw",Object(o.b)("sub",null,"k")," is the distribution weight for the GMM node k."),Object(o.b)("p",null,"Some other versions are explained ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1910.10288"},"here")," but\nso far I found the above formulation works for me the best, without any NaNs in\ntraining. I also realized that with the best-claimed method in this paper, one\nof the distribution nodes overruns the others in the middle of the training and\nbasically, attention starts to run on a single Gaussian head."),Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDElEQVQoz22S7U+SURiHn17c+iOaK821NCqtZTM/JOBWBjlS82WTIa2IF9MgNSFAV5qIzXyBGrVsi61af5QfWrlJKS8Cz/Mgz9URXJ/6cG3n/HbtPtv9O5Kj+SmGI73opT48ej8/5d+YVxNccc2hC88xtJ4gW0jj0PnQ1/TTcXwQt2GaFBm6Psa4sDTH2fkF7FNxFK2IZG3wcE26LbjFSIuPzcwuxjfrnLOHqAsF6Z5/x590BmvDKFclC63Cs7Y8YUvZoyO+TH1ohpNLYSzBGAVVQQp0LzBU52TolINQT5St7TS29x/o9EfQv4zgXPxEdidHoP81g3UuBmsfEBReKpvH/jnGzcgrbqxEeBTbQM6LgSW1hCqrqIpKSSlRLmsUiyqFgkJRIMsKmqZR9ZR/3kEmKwr5QhU5r1Yy6WBAhf1yJQCBVj1r++Jarmb/9w6hfIgYONsb5X7jGCNNXiKOFXZLKca+fWFgYh1zNMHzja8ocpqwZQl742NsTT4izmVypPEkk9jGo9yLxwh/T4q3RSnDZ9xi0WaBiZFmL5vFHQxv19CZpqidDWJaFKVkRCn1HlGKWdCF9bKXX2oe/bMVLrWNcfrhLJbpuChFRnK1B+g8MUDnsV5Grwf4kdrBsrpG690gFydm6JtPkE5lcbb5Mdb0YTzag1t425kcdyZXaRdf6Pz4C4Yn48h7Cn8BrCfGT+YhPpsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/982ff79cfecd1736d016d5821d5b7869/da8b6/blog-tts-two-methods-for-better-attention-in-tacotron-alignments.png",srcSet:["/static/982ff79cfecd1736d016d5821d5b7869/43fa5/blog-tts-two-methods-for-better-attention-in-tacotron-alignments.png 250w","/static/982ff79cfecd1736d016d5821d5b7869/c6e3d/blog-tts-two-methods-for-better-attention-in-tacotron-alignments.png 500w","/static/982ff79cfecd1736d016d5821d5b7869/da8b6/blog-tts-two-methods-for-better-attention-in-tacotron-alignments.png 1000w","/static/982ff79cfecd1736d016d5821d5b7869/16caf/blog-tts-two-methods-for-better-attention-in-tacotron-alignments.png 1465w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"The benefit of using GMM is to have more robust attention. It is also\ncomputationally light-weight compared to both bidirectional decoding and normal\nlocation attention. Therefore, you can increase your batch size and possibly\nconverge faster."),Object(o.b)("p",null,"The downside is that, although my experiments are not complete, GMM’s not\nprovided slightly worse prosody and naturalness compared to the other methods."),Object(o.b)("h3",{id:"comparison",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#comparison","aria-label":"comparison permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Comparison"),Object(o.b)("p",null,"Here I compare Graves Attention, Bidirectional Decoding, and Location Sensitive\nAttention trained on ",Object(o.b)("a",{parentName:"p",href:"https://keithito.com/LJ-Speech-Dataset/"},"LJSpeech"),"\ndataset. For the comparison, I used the set of sentences provided by ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.09263"},"this\nwork"),". There are in total of 50 sentences."),Object(o.b)("p",null,"Out of these 50 sentences Bidirectional Decoding has 1 failure, Graves\nattention has 6 failures, Location Sensitive Attention has 18, and Location\nSensitive Attention with inference time windowing has 11."),Object(o.b)("p",null,"In terms of prosodic quality, in my opinion, Location Sensitive Attention >\nBidirectional Decoding > Graves Attention > Location Sensitive Attention with\nWindowing. However, I should say the quality difference is hardly observable in\nLJSpeech dataset. I also need to point out that, it is a hard dataset."),Object(o.b)("p",null,"If you like to try these methods, all these are implemented in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS"},"Coqui\nTTS"),". Give them a try!"))}d.isMDXComponent=!0},KLL9:function(t,e,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("O9mE"),s=a("v+Ly"),r=a("mrST"),l=a("1Yd/"),c=a("ozyN"),d=a("7cfw"),b=a("t4Fg");e.a=function(t){var e=t.children,a=t.data,h=t.pageContext,p=a.mdx;return Object(n.useEffect)((function(){Object(b.a)()})),o.a.createElement(i.a,null,o.a.createElement(l.a,{title:h.frontmatter.title+" / Blog",description:h.frontmatter.description||p.excerpt}),o.a.createElement(s.a,null,o.a.createElement(r.a,{title:h.frontmatter.title,subtitle:h.frontmatter.description,name:h.frontmatter.name,picture:h.frontmatter.picture,date:h.frontmatter.date,toc:p.tableOfContents.items},o.a.createElement(c.a,null,e))),o.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-tts-two-methods-for-better-attention-in-tacotron-mdx-419c44a1e2cd5dc25bf3.js.map