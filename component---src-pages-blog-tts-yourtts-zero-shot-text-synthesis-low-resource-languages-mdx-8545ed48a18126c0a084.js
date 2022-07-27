(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"6obM":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var s=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("KLL9"),r=["components"],i={},l={pageQuery:"3484569904",_frontmatter:i},c=o.a;function b(e){var t=e.components,a=Object(s.a)(e,r);return Object(n.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"👉 ",Object(n.b)("a",{parentName:"p",href:"/"},"Try the YourTTS demo")),Object(n.b)("p",null,"👉 Visit the YourTTS ",Object(n.b)("a",{parentName:"p",href:"https://edresson.github.io/YourTTS/"},"project page")),Object(n.b)("p",null,"👉 Try YourTTS on ",Object(n.b)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1ftI0x16iqKgiQFgTjTDgRpOM1wC1U-yS?usp=sharing"},"Colab")),Object(n.b)("p",null,"👉 Try voice conversion with YourTTS on ",Object(n.b)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1gjdwOKCZuavPn_5oy8QA01sKmXpEq5AZ?usp=sharing"},"Colab")),Object(n.b)("p",null,"The recent surge of new end-to-end deep learning models has enabled new and\nexciting Text-to-Speech (TTS) use-cases with impressive natural-sounding\nresults. However, most of these models are trained on massive datasets\n(20-40 hours) recorded with a single speaker in a professional environment. In\nthis setting, expanding your solution to multiple languages and speakers is not\nfeasible for everyone. Moreover, it is particularly tough for low-resource\nlanguages not commonly targeted by mainstream research. To get rid of these\nlimitations and bring zero-shot TTS to low resource languages, we built\n",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2112.02418"},"YourTTS"),", which can synthesize voices in\nmultiple languages and reduce data requirements significantly by transferring\nknowledge among languages in the training set. For instance, we can easily\nintroduce Brazilian Portuguese to the model with a single speaker dataset by\nco-training with a larger English dataset. It makes the model speak Brazilian\nPortuguese with voices from the English dataset, or we can even introduce new\nspeakers by zero-shot learning on the fly."),Object(n.b)("p",null,"In “",Object(n.b)("strong",{parentName:"p"},"YourTTS"),": Towards Zero-Shot Multi-Speaker TTS and Zero-Shot Voice\nConversion for everyone” we introduce a model with the following capabilities:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Multi-Lingual TTS"),": Synthesizing speech in multiple languages with a single\nmodel."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Multi-Speaker TTS"),": Synthesizing speech with different voices with a single\nmodel."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Zero-Shot learning"),": Adapting the model to synthesize the speech of a novel\nspeaker without re-training the model."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Speaker/language adaptation"),": Fine-tuning a pre-trained model to learn a\nnew speaker or language. (Learn Turkish from a relatively smaller dataset\nby transferring knowledge from learned languages)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Cross-language voice transfer"),": Transferring a voice from its original\nlanguage to a different language. (Using the voice of an English speaker in\nFrench)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Zero-shot voice conversion"),": Changing the voice of a given speech clip.")),Object(n.b)("div",{align:"center"},Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.19999999999999%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/b89c253536048e68d39ccf79d68bea74/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-modes.png",srcSet:["/static/b89c253536048e68d39ccf79d68bea74/43fa5/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-modes.png 250w","/static/b89c253536048e68d39ccf79d68bea74/c6e3d/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-modes.png 500w","/static/b89c253536048e68d39ccf79d68bea74/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-modes.png 1000w","/static/b89c253536048e68d39ccf79d68bea74/a2880/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-modes.png 1312w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("h3",{id:"model-architecture",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#model-architecture","aria-label":"model architecture permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Model Architecture"),Object(n.b)("p",null,"YourTTS is an extension of our previous work ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2104.05557"},"SC-GlowTTS"),".\nIt uses the ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2106.06103"},"VITS")," (Variational Inference with\nadversarial learning for end-to-end Text-to-Speech) model as the backbone architecture and\nbuilds on top of it. We use a larger text encoder than the original model.\nAlso, YourTTS employs a separately trained speaker encoder model to compute the\nspeaker embedding vectors (d-vectors) to pass speaker information to the rest\nof the model. We use the ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2009.14153"},"H/ASP")," model as the\nspeaker encoder architecture. See the figure below for the overall model\narchitecture in training (right) and inference (left)."),Object(n.b)("div",{align:"center"},Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.4%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/aeec1cf73c251540bf76af923d1737af/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-inference.png",srcSet:["/static/aeec1cf73c251540bf76af923d1737af/43fa5/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-inference.png 250w","/static/aeec1cf73c251540bf76af923d1737af/c6e3d/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-inference.png 500w","/static/aeec1cf73c251540bf76af923d1737af/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-inference.png 1000w","/static/aeec1cf73c251540bf76af923d1737af/2e9ed/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-inference.png 1500w","/static/aeec1cf73c251540bf76af923d1737af/39a40/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-inference.png 1874w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("p",null,"VITS is a peculiar TTS model as it employs different deep-learning techniques\ntogether (adversarial learning, normalizing flows, variational auto-encoders,\ntransformers) to achieve high-quality natural-sounding output. It is mainly\nbuilt on the ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.11129"},"GlowTTS")," model. The GlowTTS\nis light, robust to long sentences, converges rapidly, and is backed up by\ntheory since it directly maximizes the log-likelihood of speech with the\nalignment. However, its biggest weakness is the lack of naturalness and\nexpressivity of the output."),Object(n.b)("p",null,"VITS improves on it by introducing specific updates. First, it replaces the\nduration predictor with a stochastic duration predictor that better models the\nvariability in speech. Then, it connects a HifiGAN vocoder to the decoder’s\noutput and joins the two with a variational autoencoder (VAE). That allows the\nmodel to train in an end2end fashion and find a better intermediate\nrepresentation than traditionally used mel-spectrograms. This results in high\nfidelity and more precise prosody, achieving better MOS values reported in the\npaper."),Object(n.b)("p",null,"Note that both GlowTTS and VITS implementations are available on 🐸TTS."),Object(n.b)("h3",{id:"dataset",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#dataset","aria-label":"dataset permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Dataset"),Object(n.b)("p",null,"We combined multiple datasets for different languages. We used ",Object(n.b)("a",{parentName:"p",href:"https://datashare.ed.ac.uk/handle/10283/2651"},"VCTK"),"\nand ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1904.02882"},"LibriTTS")," for English (multispeaker datasets),\n",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.05144"},"TTS-Portuguese Corpus")," (TPC) for Brazilian\nPortuguese, and the French subset of the ",Object(n.b)("a",{parentName:"p",href:"https://www.caito.de/2019/01/the-m-ailabs-speech-dataset/"},"M-AILABS"),"\ndataset (FMAI)."),Object(n.b)("p",null,"We resample the audio clips to 16 kHz, apply voice activity detection to remove\nsilences and apply ",Object(n.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS/blob/aa2450e8f28b4367791a7988cf87e395e501ce67/TTS/utils/audio.py#L787"},"RMS volume normalization"),"\nbefore passing them to the speaker encoder."),Object(n.b)("h3",{id:"training",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#training","aria-label":"training permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Training"),Object(n.b)("p",null,"We train YourTTS incrementally, starting from a single speaker English dataset\nand adding more speakers and languages along the way. We start from a\npre-trained model on the LJSpeech dataset for 1M steps and continue with the\nVCTK dataset for 200K steps. Next, we randomly initialize the new layers\nintroduced by the YourTTS model on the VITS model. Then we add the other\ndatasets one by one and train for ","~","120K steps with each new dataset."),Object(n.b)("p",null,"Before we report results on each dataset, we also fine-tune the final model with\nspeaker encoder loss (SCL) on that particular dataset. SCL compares output\nspeech embeddings with the ground truth embeddings computed by the speaker\nencoder with cosine similarity loss."),Object(n.b)("p",null,"We used a single V100 GPU and used a batch size of 64. We used the AdamW\noptimizer with beta values 0.8 and 0.99 and a learning rate of 0.0002 decaying\nexponentially with gamma 0.999875 per iteration. We also employed a weight\ndecay of 0.01."),Object(n.b)("h3",{id:"results",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#results","aria-label":"results permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Results"),Object(n.b)("p",null,"We compute “mean opinion score” (MOS) tests and similarity MOS tests to evaluate the model\nperformance. We also use ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2104.05557"},"speaker encoder cosine similarity (SECS)")," to\nmeasure the similarity between the predicted outputs and the actual audio clips\nof a target speaker. We used a 3rd party library for SECS to be compatible with\nthe previous work. We avoid details of our experiments for the sake of brevity.\nPlease refer to the paper to see the details."),Object(n.b)("div",{align:"center"},Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.200000000000003%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA1UlEQVQY0z1QR6rFMBDL/c8V3iKN9N57gWSRA+gjQf7CyIzVPEZd11iWBcdxIMsyoeu6mgVBgKqqUJYlhmGAZVkoigK+7yNNUzRNgyiKEIahtOQbJP1+PxE9z5PYtm0wiG9JkuA8TwVt2yb8Cuz7jvu+8TyPONd1waCASeu6yoB30zTViMYMattWAWzOxmxIAxp9hsT3fWHkeS4xE1n5M5rnWcj3rusU9K2AyBDO+XVy4jhWqMG/s8U4jtpD3/cSTNP0vwLOSeauKHYcR8jDHZJPY3L/APdXZAuNFp69AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/0bdf0c67d1d931092fb99c86800026c8/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png",srcSet:["/static/0bdf0c67d1d931092fb99c86800026c8/43fa5/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png 250w","/static/0bdf0c67d1d931092fb99c86800026c8/c6e3d/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png 500w","/static/0bdf0c67d1d931092fb99c86800026c8/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png 1000w","/static/0bdf0c67d1d931092fb99c86800026c8/2e9ed/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png 1500w","/static/0bdf0c67d1d931092fb99c86800026c8/9fabd/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png 2000w","/static/0bdf0c67d1d931092fb99c86800026c8/040e1/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-1.png 2458w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("p",null,"Table (1) above shows our results on different datasets. Exp1 is trained with\nonly the VCTK. Exp2. is with the VCTK and TPC. Then, we add the FMAI, LibriTTS\nfor Exp3. and Exp4, respectively. The ground truth row reports the values for\nthe real speaker clips in respective datasets. Finally, we compare our results\nwith ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.08484"},"AttentronZS")," and ",Object(n.b)("a",{parentName:"p",href:"https://arxiv.org/abs/2104.05557"},"SC-GlowTTS"),".\nNote that SC-GlowTTS is our previous work which leads the way to YourTTS. You\ncan find its implementation under ",Object(n.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS"},"🐸TTS"),". We\nachieve significantly better results than the works compared to in our\nexperiments. MOS values are on-par or better than the ground truth in some\ncases, which is surprising even for us to see."),Object(n.b)("div",{align:"center"},Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"11.6%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAWElEQVQI1z2O1w0AIQxD2X8/aiiCDOLTQ+I+IsclVsJaS3tvmZlaa8o565xzd7QxhsiAKaU/23tXjFHurlrr1fADBLOUojnnLYKDcIoIv6H8edzCeYIc+AEw0o7A7mPYtwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/1a86528f25d208b19a99b3914ccc4ca0/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png",srcSet:["/static/1a86528f25d208b19a99b3914ccc4ca0/43fa5/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png 250w","/static/1a86528f25d208b19a99b3914ccc4ca0/c6e3d/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png 500w","/static/1a86528f25d208b19a99b3914ccc4ca0/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png 1000w","/static/1a86528f25d208b19a99b3914ccc4ca0/2e9ed/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png 1500w","/static/1a86528f25d208b19a99b3914ccc4ca0/9fabd/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png 2000w","/static/1a86528f25d208b19a99b3914ccc4ca0/62145/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-2.png 2456w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("p",null,"Table (2) depicts the zero-shot voice conversion (ZSVC) results between\nlanguages and genders by the speaker embeddings. For ZSVC, we pass the given\nspeech clip from the posterior encoder to compute the hidden representation and\nre-run the model in the inference mode again conditioned on the target\nspeaker’s embedding. You see in the table the model’s performance between\nlanguages and genders. For instance, “en-pt” shows the results for converting\nthe voice of a Portuguese speaker by conditioning on an English speaker.\nAnd “M-F” offers the conversion of a Male speaker to a Female speaker."),Object(n.b)("div",{align:"center"},Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABL0lEQVQoz1WRW6uCUBSE/f9/xycJIsKgJM3shqlZPlgJXbW8pMxhVigdYVjbkT17vq3yeDwQxzHm8zmOxyO22y2WyyVWq5XI8zw4joMgCGQuFgtMp1PsdjvYtg3TNOG6LlRVFV95vV4oigKceZ6jfd7vNy6XC+q67rz9fi/ixs1mg/V63QVqmvYNvF6veD6fuN1uuN/vyLJMRD9JEvnGdx7I9tR4PBYKhrXhvV4PhmFAITKD2smNFNudTicJbD3i+74vgcS1LAuj0Uia9vt96Lr+RSYqN3I2TSPimgcQmaJ3OBwQRZE0Y/hsNpPgMAwxHA7lPwgy23ES+xf5fD4jTdN/yAxiQ97bZDIRcU1kNlbKspQ2bdPP5yON2JiBVVV1Hv90i8w75GQgvcFgIM3/AKoi/q8AUjd8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/1cbc7cb409021c47eb620e97b3f6b898/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-3.png",srcSet:["/static/1cbc7cb409021c47eb620e97b3f6b898/43fa5/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-3.png 250w","/static/1cbc7cb409021c47eb620e97b3f6b898/c6e3d/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-3.png 500w","/static/1cbc7cb409021c47eb620e97b3f6b898/da8b6/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-3.png 1000w","/static/1cbc7cb409021c47eb620e97b3f6b898/2e9ed/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-3.png 1500w","/static/1cbc7cb409021c47eb620e97b3f6b898/30dc5/blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-table-3.png 1962w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("p",null,"Table (3) yields the results for the speaker adaptation experiments where we\nfine-tune the final YourTTS model by SCL on different length clips of a\nparticular novel speaker. For instance, the top row shows the results for a\nmodel trained on a male English speaker with 61 seconds of an audio clip. GT is\nthe ground truth, ZS is zero-shot with only the speaker embeddings, and FT is\nfine-tuning. These results show that our model can achieve high similarity\nwhen fine-tuned with only 20 seconds of audio sample from a speaker in case\nmere use of speaker embeddings is not enough to produce high-quality results."),Object(n.b)("p",null,"Due to the time and space constraints in the paper, we could not expand the\nexperiments to all the possible use-cases of YourTTS. We plan to include those\nin our future study and add new capabilities to YourTTS that would give more\ncontrol over the model."),Object(n.b)("h3",{id:"try-out-yourtts",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#try-out-yourtts","aria-label":"try out yourtts permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Try out YourTTS"),Object(n.b)("p",null,"Give YourTTS a try right on your browser using the demo on our ",Object(n.b)("a",{parentName:"p",href:"/"},"homepage"),"."),Object(n.b)("p",null,"YourTTS is also available in ",Object(n.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS"},"🐸TTS")," with a\ntraining recipe and a pre-trained model. You can train your own model,\nsynthesize voice with the pre-trained model or finetune it with your dataset."),Object(n.b)("h3",{id:"ethical-concerns",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#ethical-concerns","aria-label":"ethical concerns permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Ethical Concerns"),Object(n.b)("p",null,"We are well aware that the expansion of the TTS technology enables various kinds\nof malign uses of the technology. Therefore, we also actively study different\napproaches to prevent or at the very least put more fences along the way of the\nmisuse of the TTS technology."),Object(n.b)("p",null,"To exemplify this, on our demo, we add background music to avert the unintended\nuse of the voice clips on different platforms."),Object(n.b)("p",null,"If you also want to contribute to our research and discussion in this field, join\nus ",Object(n.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/TTS/discussions/1036"},"here"),"."),Object(n.b)("h3",{id:"conclusion",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(n.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Conclusion"),Object(n.b)("p",null,"YourTTS can achieve competitive results on multi-lingual, multi-speaker TTS, and\nzero-shot learning. It also allows cross-language voice transfer, learning new\nspeakers and languages from relatively more minor datasets than the traditional\nTTS models."),Object(n.b)("p",null,"We are excited to present YourTTS and see all the different use-cases the 🐸\nCommunity will apply it to. As always, feel free to reach out for any feedback."))}b.isMDXComponent=!0},KLL9:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),o=a("O9mE"),r=a("v+Ly"),i=a("mrST"),l=a("1Yd/"),c=a("ozyN"),b=a("7cfw"),p=a("t4Fg");t.a=function(e){var t=e.children,a=e.data,g=e.pageContext,h=a.mdx;return Object(s.useEffect)((function(){Object(p.a)()})),n.a.createElement(o.a,null,n.a.createElement(l.a,{title:g.frontmatter.title+" / Blog",description:g.frontmatter.description||h.excerpt}),n.a.createElement(r.a,null,n.a.createElement(i.a,{title:g.frontmatter.title,subtitle:g.frontmatter.description,name:g.frontmatter.name,picture:g.frontmatter.picture,date:g.frontmatter.date,toc:h.tableOfContents.items},n.a.createElement(c.a,null,t))),n.a.createElement(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-tts-yourtts-zero-shot-text-synthesis-low-resource-languages-mdx-8545ed48a18126c0a084.js.map