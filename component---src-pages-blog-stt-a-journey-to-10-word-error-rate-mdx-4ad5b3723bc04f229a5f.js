(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KLL9:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("O9mE"),i=a("v+Ly"),l=a("mrST"),s=a("1Yd/"),h=a("ozyN"),c=a("7cfw"),d=a("t4Fg");t.a=function(e){var t=e.children,a=e.data,p=e.pageContext,u=a.mdx;return Object(n.useEffect)((function(){Object(d.a)()})),o.a.createElement(r.a,null,o.a.createElement(s.a,{title:p.frontmatter.title+" / Blog",description:p.frontmatter.description||u.excerpt}),o.a.createElement(i.a,null,o.a.createElement(l.a,{title:p.frontmatter.title,subtitle:p.frontmatter.description,name:p.frontmatter.name,picture:p.frontmatter.picture,date:p.frontmatter.date,toc:u.tableOfContents.items},o.a.createElement(h.a,null,t))),o.a.createElement(c.a,null))}},yNek:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("KLL9"),i=["components"],l={},s={pageQuery:"3484569904",_frontmatter:l},h=r.a;function c(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)(h,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We believe speech interfaces will be a big part of how people interact with their devices in the future. Today we are\nexcited to announce the initial release of our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/STT/releases/tag/v0.1.0"},"open source speech recognition\nmodel")," so that anyone can develop compelling speech experiences."),Object(o.b)("p",null,"The Machine Learning team has been working on an open source Automatic Speech Recognition engine modeled after the Deep\nSpeech papers (",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1412.5567"},"1"),", ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1512.02595"},"2"),") published by Baidu. One of\nthe major goals from the beginning was to achieve a Word Error Rate in the transcriptions of under 10%. We have made\ngreat progress: Our word error rate on LibriSpeech’s test-clean set is 6.5%, which not only achieves our initial goal,\nbut gets us close to human level performance."),Object(o.b)("p",null,"This post is an overview of the team’s efforts and ends with a more detailed explanation of the final piece of the\npuzzle: the CTC decoder."),Object(o.b)("h3",{id:"the-architecture",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#the-architecture","aria-label":"the architecture permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"The Architecture"),Object(o.b)("p",null,"Coqui STT is an end-to-end trainable, character-level, deep recurrent neural network\n(",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Recurrent_neural_network"},"RNN"),"). In less buzzwordy terms: it’s a deep neural network\nwith recurrent layers that gets audio features as input and outputs characters directly — the transcription of the\naudio. It can be trained using supervised learning from scratch, without any external “sources of intelligence”, like a\ngrapheme to phoneme converter or forced alignment on the input."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"/static/blog-stt-a-journey-to-10-word-error-rate-architecture-1dd53cecf9b0f6023f3d4ed8eac5fa25.gif",alt:"IMAGE"})),Object(o.b)("p",null,"This animation shows how the data flows through the network. In practice, instead of processing slices of the audio\ninput individually, we do all slices at once."),Object(o.b)("p",null,"The network has five layers: the input is fed into three fully connected layers, followed by a bidirectional RNN layer,\nand finally a fully connected layer. The hidden fully connected layers use the\n",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rectifier_%28neural_networks%29"},"ReLU")," activation. The RNN layer uses LSTM cells with\ntanh activation."),Object(o.b)("p",null,"The output of the network is a matrix of character probabilities over time. In other words, for each time step the\nnetwork outputs one probability for each character in the alphabet, which represents the likelihood of that character\ncorresponding to what’s being said in the audio at that time. The ",Object(o.b)("a",{parentName:"p",href:"http://www.cs.toronto.edu/~graves/icml_2006.pdf"},"CTC loss\nfunction")," (PDF link) considers all alignments of the audio to the\ntranscription at the same time, allowing us to maximize the probability of the correct transcription being predicted\nwithout worrying about alignment. Finally, we train using the ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1412.6980"},"Adam optimizer"),"."),Object(o.b)("h3",{id:"the-data",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#the-data","aria-label":"the data permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"The Data"),Object(o.b)("p",null,"Supervised learning requires data, lots and lots of it. Training a model like Coqui STT requires thousands of hours of\nlabeled audio, and obtaining and preparing this data can be as much work, if not more, as implementing the network and\nthe training logic."),Object(o.b)("p",null,"We started by downloading freely available speech corpora like\n",Object(o.b)("a",{parentName:"p",href:"http://www-lium.univ-lemans.fr/en/content/ted-lium-corpus"},"TED-LIUM")," and ",Object(o.b)("a",{parentName:"p",href:"http://www.openslr.org/12/"},"LibriSpeech"),", as\nwell as acquiring paid corpora like ",Object(o.b)("a",{parentName:"p",href:"https://catalog.ldc.upenn.edu/LDC2004S13"},"Fisher")," and\n",Object(o.b)("a",{parentName:"p",href:"https://catalog.ldc.upenn.edu/ldc97s62"},"Switchboard"),". We wrote importers in Python for the different data sets that\nconvert the audio files to WAV, split the audio and cleaned up the transcription of unneeded characters like punctuation\nand accents. Finally we stored the preprocessed data in CSV files that can be used to feed data into the network."),Object(o.b)("p",null,"Using existing speech corpora allowed us to quickly start working on the model. But in order to achieve excellent\nresults, we needed a lot more data. We had to be creative. We thought that maybe this type of speech data would already\nexist out there, sitting in people’s archives, so we reached out to public TV and radio stations, language study\ndepartments in universities, and basically anyone who might have labeled speech data to share. Through this effort, we\nwere able to more than double the amount of training data we had to work with, which is now enough for training a\nhigh-quality English model."),Object(o.b)("p",null,"Having a high-quality voice corpus publicly available not only helps advance our own speech recognition engine. It will\neventually allow for broad innovation because developers, startups and researchers around can train and experiment with\ndifferent architectures and models for different languages. It could help democratize access to deep learning for those\nwho can’t afford to pay for thousands of hours of training data (almost everyone)."),Object(o.b)("p",null,"To build a speech corpus that’s free, open source, and big enough to create meaningful products with, we worked with\nMozilla’s Open Innovation team and launched the ",Object(o.b)("a",{parentName:"p",href:"https://commonvoice.mozilla.org/en"},"Common Voice project")," to collect\nand validate speech contributions from volunteers all over the world. Today, the team is releasing a large collection of\nvoice data into the ",Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/choose/zero/"},"public domain"),". Find out more about the release on ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/mozilla-open-innovation/sharing-our-common-voice-mozilla-releases-second-largest-public-voice-data-set-e88f7d6b7666"},"the\nOpen Innovation Medium\nblog"),"."),Object(o.b)("h3",{id:"the-hardware",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#the-hardware","aria-label":"the hardware permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"The Hardware"),Object(o.b)("p",null,"Coqui STT has over 120 million parameters, and training a model this large is a very computationally expensive task: you\nneed lots of GPUs if you don’t want to wait forever for results. We looked into training on the cloud, but it doesn’t\nwork financially: dedicated hardware pays for itself quite quickly if you do a lot of training. The cloud is a good way\nto do fast hyperparameter explorations though, so keep that in mind."),Object(o.b)("p",null,"We started with a single machine running four Titan X Pascal GPUs, and then bought another two servers with 8 Titan XPs\neach. We run the two 8 GPU machines as a cluster, and the older 4 GPU machine is left independent to run smaller\nexperiments and test code changes that require more compute power than our development machines have. This setup is\nfairly efficient, and for our larger training runs we can go from zero to a good model in about a week."),Object(o.b)("p",null,"Setting up distributed training with TensorFlow was an arduous process. Although it has the most mature distributed\ntraining tools of the available deep learning frameworks, getting things to actually work without bugs and to take full\nadvantage of the extra compute power is tricky. Our current setup works thanks to the incredible efforts of my colleague\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/tilmankamp"},"Tilman Kamp"),", who endured long battles with TensorFlow,\n",Object(o.b)("a",{parentName:"p",href:"https://slurm.schedmd.com/"},"Slurm"),", and even the Linux kernel until we had everything working."),Object(o.b)("h3",{id:"putting-it-all-together",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#putting-it-all-together","aria-label":"putting it all together permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Putting it All Together"),Object(o.b)("p",null,"At this point, we have two papers to guide us, a model implemented based on those papers, the resulting data, and the\nhardware required for the training process. It turns out that replicating the results of a paper isn’t that\nstraightforward. The vast majority of papers don’t specify all the hyperparameters they use, if they specify any at all.\nThis means you have to spend a whole lot of time and energy doing hyperparameter searches to find a good set of values.\nOur initial tests with values chosen through a mix of randomness and intuition weren’t even close to the ones reported\nby the paper, probably due to small differences in the architecture — for one, we used LSTM (",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Long_short-term_memory"},"Long short-term\nmemory"),") cells instead of GRU (gated recurrent unit) cells. We\nspent a lot of time doing a binary search on dropout ratios, we reduced the learning rate, changed the way the weights\nwere initialized, and experimented with the size of the hidden layers as well. All of those changes got us pretty close\nto our desired target of <10% Word Error Rate, but not there."),Object(o.b)("p",null,"One piece missing from our code was an important optimization: integrating our language model into the decoder. The CTC\n(Connectionist Temporal Classification) decoder works by taking the probability matrix that is output by the model and\nwalking over it looking for the most likely text sequence according to the probability matrix. If at time step 0 the\nletter “C” is the most likely, and at time step 1 the letter “A” is the most likely, and at time step 2 the letter “T”\nis the most likely, then the transcription given by the simplest possible decoder will be “CAT”. This strategy is called\ngreedy decoding."),Object(o.b)("div",{align:"center"},Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"500px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.599999999999994%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVQoz2VSPa8BURC93m5EZKOjpRChkvADxH+gIERCJyQK29hCdDQ+KoVoSYhEQuIniEJoRINOfDQ0Nr7fO8+8tzbvTTGZO3POnLlzL0skEj6fTxTF4/H4fD6v1yv85z+73+8o3W43xOPxOJVKAcZarRbV4Il2Op0mk8lgMECp0Wj0er3VaoX84/GAr9VqOp3OZDKNRiMWCATK5TIQOMzn83q9brfb2a9pNBp4vV7v9/uLxWIkEuF5nkpms5lNp9N0Ou10OtFPzYF9vIz4akMvl8vl9XoZjYqxd7tdpVLhOA4EAnEvIz7/Mq1Wi3w2mwVFlmVGm6A7bzYbo9FIykoLtdFEWBjpMVom9C+XC4JoNEqaAMXjcUmSwuGwxWJBkm4bi8WI+b1t9WPAZzIZEvF4PDhiKPh8Pk9JzLVer5XNv5XhIY7NEa7b7dKzwZdKJavV6na7HQ4HgQn/Q6ZOi8XCYDC02+1gMIhXgSzlk8kkltRsNgVBOBwOihj785NCodBsNgMnl8t1Oh3MgvUUCgVw0Mtms+HbKOA3mUSGw2G1WkVwPp+XyyWC/X6/3W4J0+/30ZTyEP8CwP6ncwMl13MAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/951c29bfac70e155e5037020410b8cfe/c6e3d/blog-stt-a-journey-to-10-word-error-rate-cat.png",srcSet:["/static/951c29bfac70e155e5037020410b8cfe/43fa5/blog-stt-a-journey-to-10-word-error-rate-cat.png 250w","/static/951c29bfac70e155e5037020410b8cfe/c6e3d/blog-stt-a-journey-to-10-word-error-rate-cat.png 500w"],sizes:"(max-width: 500px) 100vw, 500px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("p",null,"This is a pretty good way of decoding the probabilities output by the model into a sequence of characters, but it has\none major flaw: it only takes into account the output of the network, which means it only takes into account the\ninformation from audio. When the same audio has two equally likely transcriptions (think “new” vs “knew”, “pause” vs\n“paws”), the model can only guess at which one is correct. This is far from optimal: if the first four words in a\nsentence are “the cat has tiny”, we can be pretty sure that the fifth word will be “paws” rather than “pause”. Answering\nthose types of questions is the job of a language model, and if we could integrate a language model into the decoding\nphase of our model, we could get way better results."),Object(o.b)("p",null,"When we first tried to tackle this issue, we ran into a couple of blockers in TensorFlow: first, it doesn’t expose its\nbeam scoring functionality in the Python API (probably for performance reasons); and second, the log probabilities\noutput by the CTC loss function were (are?) ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tensorflow/tensorflow/issues/6034"},"invalid"),"."),Object(o.b)("p",null,"We decided to work around the problem by building something like a spell checker instead: go through the transcription\nand see if there are any small modifications we can make that increase the likelihood of that transcription being valid\nEnglish, according to the language model. This did a pretty good job of correcting small spelling mistakes in the\noutput, but as we got closer and closer to our target error rate, we realized that it wasn’t going to be enough. We’d\nhave to bite the bullet and write some C++."),Object(o.b)("h3",{id:"beam-scoring-with-a-language-model",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#beam-scoring-with-a-language-model","aria-label":"beam scoring with a language model permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Beam Scoring with a Language Model"),Object(o.b)("p",null,"Integrating the language model into the decoder involves querying the language model every time we evaluate an addition\nto the transcription. Going back to the previous example, when looking into whether we want to choose “paws” or “pause”\nfor the next word after “the cat has tiny”, we query the language model and use that score as a weight to sort the\ncandidate transcriptions. Now we get to use information not just from audio but also from our language model to decide\nwhich transcription is more likely. The algorithm is described in ",Object(o.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1408.2873"},"this paper")," by\nHannun et. al."),Object(o.b)("p",null,"Luckily, TensorFlow does have an extension point on its CTC beam search decoder that allows the user to supply their own\nbeam scorer. This means all you have to do is write the beam scorer that queries the language model and plug that in.\nFor our case, we wanted that functionality to be exposed to our Python code, so we also exposed it as a custom\nTensorFlow operation that can be loaded using\n",Object(o.b)("a",{parentName:"p",href:"https://www.tensorflow.org/api_docs/python/tf/load_op_library"},"tf.load_op_library"),"."),Object(o.b)("p",null,"Getting all of this to work with our setup required quite a bit of effort, from fighting with the Bazel build system for\nhours, to making sure all the code was able to handle Unicode input in a consistent way, and debugging the beam scorer\nitself. The system requires quite a few pieces to work together:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The language model itself (we use ",Object(o.b)("a",{parentName:"li",href:"http://kheafield.com/code/kenlm/"},"KenLM")," for building and querying). A"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Trie"},"trie")," of all the words in our vocabulary. An alphabet file that maps integer"),Object(o.b)("li",{parentName:"ul"},"labels output by the network into characters.")),Object(o.b)("p",null,"Although adding this many moving parts does make our code harder to modify and apply to different use cases (like other\nlanguages), it brings great benefits: Our word error rate on LibriSpeech’s test-clean set went from 16% to 6.5%, which\nnot only achieves our initial goal, but gets us close to human level performance (5.83% according to the Deep Speech 2\npaper). On a MacBook Pro, using the GPU, the model can do inference at a real-time factor of around 0.3x, and around\n1.4x on the CPU alone. (A real-time factor of 1x means you can transcribe 1 second of audio in 1 second.)"),Object(o.b)("p",null,"It has been an incredible journey to get to this place: the initial release of our model! In the future we want to\nrelease a model that’s fast enough to run on a mobile device or a Raspberry Pi."),Object(o.b)("p",null,"If this type of work sounds interesting or useful to you, come check out our repository on GitHub and our Discourse\nchannel. We have a growing community of contributors and we’re excited to help you create and publish a model for your\nlanguage."),Object(o.b)("h3",{id:"license",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#license","aria-label":"license permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(o.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"License"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution Share-Alike License v3.0")," or any later\nversion"))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-stt-a-journey-to-10-word-error-rate-mdx-4ad5b3723bc04f229a5f.js.map