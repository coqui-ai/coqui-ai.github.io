(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{KLL9:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("O9mE"),o=a("v+Ly"),s=a("mrST"),c=a("1Yd/"),l=a("ozyN"),g=a("7cfw"),p=a("t4Fg");t.a=function(e){var t=e.children,a=e.data,h=e.pageContext,u=a.mdx;return Object(n.useEffect)((function(){Object(p.a)()})),r.a.createElement(i.a,null,r.a.createElement(c.a,{title:h.frontmatter.title+" / Blog",description:h.frontmatter.description||u.excerpt}),r.a.createElement(o.a,null,r.a.createElement(s.a,{title:h.frontmatter.title,subtitle:h.frontmatter.description,name:h.frontmatter.name,picture:h.frontmatter.picture,date:h.frontmatter.date,toc:u.tableOfContents.items},r.a.createElement(l.a,null,t))),r.a.createElement(g.a,null))}},poAZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return g}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("KLL9"),o=["components"],s={},c={pageQuery:"3484569904",_frontmatter:s},l=i.a;function g(e){var t=e.components,a=Object(n.a)(e,o);return Object(r.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tacotron is a commonly used Text-to-Speech architecture. It is a very flexible\nalternative over traditional solutions. It only requires text and corresponding\nvoice clips to train the model. It avoids the toil of fine-grained annotation\nof the data. However, Tacotron might also be very time demanding to train,\nespecially if you don’t know the right hyperparameters to begin with. Here, I\nlike to share a gradual training scheme to ease the training difficulty. In my\nexperiments, it provides faster training, tolerance for various hyperparameter\nvalues, and more time with your family."),Object(r.b)("p",null,"In summary, Tacotron is an Encoder-Decoder architecture with Attention. it\ntakes a sentence as a sequence of characters (or phonemes) and it outputs\nsequence of spectrogram frames to be ultimately converted to speech with an\nadditional vocoder algorithm (e.g. Griffin-Lim or WaveRNN). There are two\nversions of Tacotron, Tacotron and Tacotron2. Tacotron is a complicated\narchitecture but it has fewer model parameters as compared to Tacotron2.\nTacotron2 is much simpler but it is about 4x larger (7m vs 24m parameters). To\nbe clear, so far I have only used this gradual training method with Tacotron\nand I am about to begin to experiment with Tacotron2 soon."),Object(r.b)("p",null,Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.6%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAB7CAAAewgFu0HU+AAAC8UlEQVQ4y11UiVbjMAzs/38Xb9mFhZYWKK9X0tyX48Q5mqTHrKTQAmvePJc8ezSSRp4opRDHMXKVo6kb9F2PqqpQFAXapkXbtrLXdS24XC7gxft3XL9NkiSB53nYu3vEaQxdajRNg67rUJryBibjQOfzWS7zfsUPQlZQlAXerXc8Lh4xX73ciN3IhRM6iNIIZVkK4fXy/+v6fWLbNna7HVzHxfJ9if3eEXV930PnWsrBio/Ho3xjRbzzOYfuMHI6d1NoWZYQhmGIxWIO13VwOp0EhlJlQg7Ai0n599AP2Cx3mP55wevzO/JMCxkHm2itkaYpPD8QcLSaFB0Oh8/mlKKQa8hkHEjIaefzZWnQD4MEE4UeKVpvLTyvFe5mLqbbAhvLQxhncGIDK8jhpyMx13ugyxzodRPh7nmN33Mbez9FWWicmVDrHEoXWLkav55XmK9DRIlCrkt4kYbtJYiyktI3opCVsEpWtaNyhdHYsL7vRoVcI7aNzjMkUYCurUkJpUxqmrqSyAMdZlVXhZz+2snwMN9iwQLSgkiLkTAIfCw/PjD/2GPjpNh5CqnSZCWDRBnEqkSmzVhHIuVAx9MR1WEgS6XwkxymZt8eRsKCFERxgr9vLu5fLIEfJsiI1PJSgRsqIWRwJyOfhsHyP0FDsXHR1u3ow1xlCMIYr9sY97MNZqtAGpJRt50wh00FDySlsY6swhQV9pYDa0se3thISClbSQjrppbDMX3cri14TiAdraua5psslWRURyM24hpeR0+M/Pn3fVom5/OJDnfYrnw8Pbxh+WZTgIq6NiCJqRyRooZVcoG7y5dSmv84DIhhnOPL+euBmByHHi29MG7eY7YOsIlqmIZGbzhBVR1iIjPtIMq4w7wMlcN/mkK5HlmOGqj1FyFH7SgdQxG15wpqGjl+sipSaihdTp/9x+DFFppN57B2Nk2Wkv9vKUsq7C3fg//2CuPsMZAP25ZqVhNIbdscfrwy3dAh1CSg0hL4+/v4D6XLDgN1/+3QAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/79970935c0194dc08609144640111d32/da8b6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-architecture.png",srcSet:["/static/79970935c0194dc08609144640111d32/43fa5/blog-tts-gradual-training-with-tacotron-for-faster-convergence-architecture.png 250w","/static/79970935c0194dc08609144640111d32/c6e3d/blog-tts-gradual-training-with-tacotron-for-faster-convergence-architecture.png 500w","/static/79970935c0194dc08609144640111d32/da8b6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-architecture.png 1000w","/static/79970935c0194dc08609144640111d32/9aaa6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-architecture.png 1447w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("p",null,"Here is the trick. Tacotron has a parameter called “r” which defines the number\nof spectrogram frames predicted per decoder iteration. It is a useful parameter\nto reduce the number of computations since the larger r, the fewer the decoder\niterations. But setting the value to high might reduce the performance as well.\nAnother benefit of higher r value is that the alignment module stabilizes much\nfaster. If you talk someone who used Tacotron, they would probably know what\nstruggle the attention means. So finding the right trade-off for r is a great\ndeal. In the original Tacotron paper, authors used r as 2 for the best-reported\nmodel. They also emphasize the challenge of training the model with r=1."),Object(r.b)("p",null,"Gradual training comes to the rescue at this point. What it means is that we\nset r initially large, such as 7. Then, as the training continues, we reduce it\nuntil the convergence. This simple trick helps quite magically to solve two\nmain problems. The first, it helps the network to learn the monotonic attention\nafter almost the first epoch. The second, it expedites convergence quite much.\nAs a result, the final model happens to have more stable and resilient\nattention without any degrigation of performance. You can even eventually let\nthe network to train with r=1 which was not even reported in the original\npaper."),Object(r.b)("p",null,"Here, I like to share some results to prove the effectiveness. I used LJspeech\ndataset for all the results. The training schedule can be summarized as\nfollows. (You see I also change the batch_size but it is not necessary if you\nhave enough GPU memory.)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"{\n“gradual_training”: [[0, 7, 32], [10000, 5, 32], [50000, 3, 32], [130000, 2, 16], [290000, 1, 8]] # [start_step, r, batch_size]\n}\n")),Object(r.b)("p",null,"Below you can see the attention at validation time after just 1K iterations\nwith the training schedule above."),Object(r.b)("p",null,Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.4%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVQoz2WRzWsTQRjG32RTQRGiNsmhCAYP4smDFQs9bHaz2U0ETTebnU1iIWbTSKxYLNgeFP0fVCgoCIKIJz1ZUDHNpUYp5mPToIlNm8R+Jp4KKkTJhzNxW1GHh4dl5/m97zszkJnL0+BlQGQMInHw9SSyBpGGkbNHZNYz7rCET7PXhwavuodubtaza9u3u91up9uCTELjDH6eQn/JhFyguIUr8fFRtznotE84T1xjBsa8w7cqGx/mG496cBtyyUUnSC6D7DLKxLEomcedj11kfJPcHsSBnzcFeSNiwSeb1Y9rpWfrsxhuYzg7l9dhwiPOpLjARx+NM+FpoS/AAynKm6P83lEGZGSNabXle58SBO50YOFlGtfWGxokASSPJUiHpxmryuOiFJ5fFg5Ehf0XnEZFscQyK5U7+TcYbmE4NbuASZ7y4xBrv3xSvOEcmzwzEHIRcucgJKAwIKFDanapejeV0junExoLkgPQOYfqiU8NuqcchyOENKJd0kUp+Mz4FVC/mitWZ16/1eFschFHY+cD3kDUvQ/hUfHwfy5v5y502KJqhcqD5+8I3MadX+RFIRIaDrFAEnyfwpuUf1+OQoJJwQMiW7SgVR4+mdfhXKEsnFJpkDij3wlY0v/iQOaMiAZRskYK75cf30/qcKZY9dov+fvDkk2VrKrPEsGOQ35b9Pf37p+Rg+HI8Yliuvx05hWBW21ofm9u1Rqb1bquSr3++UuttFrSllbL62SrsoV9A3u1Ua81fjR/ft3+1u2tX2XoNquU0C9fAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/646c2bcb73bc464ecee4064944d76d75/da8b6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-attention.png",srcSet:["/static/646c2bcb73bc464ecee4064944d76d75/43fa5/blog-tts-gradual-training-with-tacotron-for-faster-convergence-attention.png 250w","/static/646c2bcb73bc464ecee4064944d76d75/c6e3d/blog-tts-gradual-training-with-tacotron-for-faster-convergence-attention.png 500w","/static/646c2bcb73bc464ecee4064944d76d75/da8b6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-attention.png 1000w","/static/646c2bcb73bc464ecee4064944d76d75/2e9ed/blog-tts-gradual-training-with-tacotron-for-faster-convergence-attention.png 1500w","/static/646c2bcb73bc464ecee4064944d76d75/0d4f8/blog-tts-gradual-training-with-tacotron-for-faster-convergence-attention.png 1600w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("p",null,"Next, let’s check the model training curve and convergence."),Object(r.b)("p",null,Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.400000000000002%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3ElEQVQY00WQUW4DIQxEuf81W3VFSKIlYIwxZGqzVfphITzM85iQ7gm3nwP5zJhrYqpirQVujFtKeHwd6NSw3m/MObdGRIgx4n5EtNZ2X83nFbh30DODc4Guf8HBPATlO0Jq28N06Ed3UE1PdBGMMT4VereGDqzC0HpNm5bCkwwzSiEo8R7md/1LQwaUF2FYifnFgXYGZrYpfUMm21naBe7XRNdHrts4HGwBxKpW2hC191tzHwuCJ+q2djeYr9/sv5o9nraeaw709bxH5wv0ODHlSuS+rbtWKvgs+AXDIoV6kyTZaQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/187a960e511c11adecc071701305a1cf/da8b6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-graph.png",srcSet:["/static/187a960e511c11adecc071701305a1cf/43fa5/blog-tts-gradual-training-with-tacotron-for-faster-convergence-graph.png 250w","/static/187a960e511c11adecc071701305a1cf/c6e3d/blog-tts-gradual-training-with-tacotron-for-faster-convergence-graph.png 500w","/static/187a960e511c11adecc071701305a1cf/da8b6/blog-tts-gradual-training-with-tacotron-for-faster-convergence-graph.png 1000w","/static/187a960e511c11adecc071701305a1cf/a6d44/blog-tts-gradual-training-with-tacotron-for-faster-convergence-graph.png 1012w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("p",null,"Here you can see here the model jumping from r=7 to r=5 at about 10k\niterations. There is obvious easy gain after the jump."),Object(r.b)("p",null,"You can listen to ",Object(r.b)("a",{parentName:"p",href:"https://soundcloud.com/user-565970875/sets/gradual-training-results"},"voice\nexamples"),"\ngenerated with the final model using GriffinLim vocoder. I’d say the quality of\nthese examples is quite good to my ear."),Object(r.b)("p",null,"This is a short post, but if you like to replicate the results here, you can\nvisit our repo ",Object(r.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS"},"TTS")," and just run the training\nwith the provided config.json file. Hopefully, the documentation on the repo\nwould help you in getting started. Otherwise, you can always ask for help\ncreating an issue or on our ",Object(r.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS/discussions"},"TTS discussion\npage"),". There are also some other\ncool things in the repo that I will also write about in the future. Until next\ntime!"))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-tts-gradual-training-with-tacotron-for-faster-convergence-mdx-1af17f31cd03ce87a706.js.map