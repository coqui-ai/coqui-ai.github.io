(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{KLL9:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("O9mE"),r=n("v+Ly"),s=n("mrST"),l=n("1Yd/"),c=n("ozyN"),p=n("7cfw"),h=n("t4Fg");t.a=function(e){var t=e.children,n=e.data,u=e.pageContext,d=n.mdx;return Object(a.useEffect)((function(){Object(h.a)()})),i.a.createElement(o.a,null,i.a.createElement(l.a,{title:u.frontmatter.title+" / Blog",description:u.frontmatter.description||d.excerpt}),i.a.createElement(r.a,null,i.a.createElement(s.a,{title:u.frontmatter.title,subtitle:u.frontmatter.description,name:u.frontmatter.name,picture:u.frontmatter.picture,date:u.frontmatter.date,toc:d.tableOfContents.items},i.a.createElement(c.a,null,t))),i.a.createElement(p.a,null))}},TfRJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("KLL9"),r=["components"],s={},l={pageQuery:"3484569904",_frontmatter:s},c=o.a;function p(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Machine Learning team at continues to work on an automatic speech\nrecognition engine as part of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/STT"},"Coqui STT"),",\nwhich aims to make speech technologies and trained models openly available to\ndevelopers. We’re hard at work improving performance and ease-of-use for our\nopen source speech-to-text engine. The upcoming 0.2 release will include a\nmuch-requested feature: the ability to do speech recognition live, as the audio\nis being recorded. This blog post describes how we changed the STT engine’s\narchitecture to allow for this, achieving real-time transcription performance.\nSoon, you’ll be able to transcribe audio at least as fast as it’s coming in."),Object(i.b)("p",null,"When applying neural networks to sequential data like audio or text, it’s\nimportant to capture patterns that emerge over time. Recurrent neural networks\n(RNNs) are neural networks that “remember” — they take as input not just the\nnext element in the data, but also a state that evolves over time, and use this\nstate to capture time-dependent patterns. Sometimes, you may want to capture\npatterns that depend on future data as well. One of the ways to solve this is\nby using two RNNs, one that goes forward in time and one that goes backward,\nstarting from the last element in the data and going to the first element. You\ncan learn more about RNNs (and about the specific type of RNN used in Coqui\nSTT) in ",Object(i.b)("a",{parentName:"p",href:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},"this article by Chris\nOlah"),"."),Object(i.b)("h3",{id:"using-a-bidirectional-rnn",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#using-a-bidirectional-rnn","aria-label":"using a bidirectional rnn permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(i.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Using a bidirectional RNN"),Object(i.b)("p",null,"The current release of Coqui STT (",Object(i.b)("a",{parentName:"p",href:"/blog/stt/a-journey-to-10-word-error-rate"},"previously\ncovered"),") uses a bidirectional RNN\nimplemented with ",Object(i.b)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"TensorFlow"),", which means it\nneeds to have the entire input available before it can begin to do any useful\nwork. One way to improve this situation is by implementing a streaming model:\nDo the work in chunks, as the data is arriving, so when the end of the input is\nreached, the model is already working on it and can give you results more\nquickly. You could also try to look at partial results midway through the\ninput."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"/static/blog-stt-a-journey-to-10-word-error-rate-architecture-1dd53cecf9b0f6023f3d4ed8eac5fa25.gif",alt:"IMAGE"})),Object(i.b)("p",null,"This animation shows how the data flows through the network. Data flows from\nthe audio input to feature computation, through three fully connected layers.\nThen it goes through a bidirectional RNN layer, and finally through a final\nfully connected layer, where a prediction is made for a single time step."),Object(i.b)("p",null,"In order to do this, you need to have a model that lets you do the work in\nchunks. Here’s the diagram of the current model, showing how data flows through\nit."),Object(i.b)("p",null,"As you can see, on the bidirectional RNN layer, the data for the very last step\nis required for the computation of the second-to-last step, which is required\nfor the computation of the third-to-last step, and so on. These are the red\narrows in the diagram that go from right to left."),Object(i.b)("p",null,"We could implement partial streaming in this model by doing the computation up\nto layer three as the data is fed in. The problem with this approach is that it\nwouldn’t gain us much in terms of latency: Layers four and five are responsible\nfor almost half of the computational cost of the model."),Object(i.b)("h3",{id:"using-a-unidirectional-rnn-for-streaming",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#using-a-unidirectional-rnn-for-streaming","aria-label":"using a unidirectional rnn for streaming permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(i.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Using a unidirectional RNN for streaming"),Object(i.b)("p",null,"Instead, we can replace the bidirectional layer with a unidirectional layer,\nwhich does not have a dependency on future time steps. That lets us do the\ncomputation all the way to the final layer as soon as we have enough audio\ninput."),Object(i.b)("p",null,"With a unidirectional model, instead of feeding the entire input in at once and\ngetting the entire output, you can feed the input piecewise. Meaning, you can\ninput 100ms of audio at a time, get those outputs right away, and save the\nfinal state so you can use it as the initial state for the next 100ms of audio."),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"625px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMUlEQVQ4y3VUi5KaQBC8//+tJJUYEu8RH2XpaRSBBXktLOyDRdIwHqcpnaKsmd3t6d7eKZ+6ruOcG2O6Ic7nM+XWWuRt22qtUSJB2QzRfcTTuDGCi6JAopTCOo6WZYkSHZFjsa7rG/AIwy/25vO5lBKEWEmSZLFYkBxocV13t9uNhz/BFDhxiiLsERhdTqcT1kkwROV5foeZApgsy8CDBI0gBKehHzk0CyEKzlFewOerQB1F0XQ69bxIiFYI+/6+f3l5juNCyi5N6+VyNZv9IQt7MPzwfT8MQ+qHX/QeDYOED8Ma5ErJG8NI0qgER1gQ0AtBC46i73hnXCFNkoduw6HlcqmHwEqapqvVip4KHJ7n7ff7h27373wl2zaNuHpnPeh+yFxV1Ww2A5JcgX8QMjIfDoftdvuQGWz0sMD3r60UXZKY8VR80HUfDAzGiCaRRtU7Hskw4OM4Jv/uywZms9lAIcmGvaSTZIeMUa87zNAMt3meowXphAUgRyPagnmIzyH5zy3M/WQyWa/XQOJ6cMtxHPiEXXjx9vo6fX5mjBHkhlnKfpJxMYy3VLISIstSlJznWitwpmmCuh9vay/MF9q6LkWlG4sP94tOcZbzxramsco0QRiWVWVsq/vSZLzAH0UPjuPEGu2mtROYX0w7zDi++vaXf92XDsrA/PDkl20+cSts/fTVb9Z8d4U2ZvgnGZjLWru5YoXG5xf6kIhjVgWF7j+uDkl5zCS7lDrMa2nsPydJgpnM53nmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IMAGE",title:"IMAGE",src:"/static/896790eb2e0e662652e5d0ca3d2a9c32/25b0e/blog-stt-speech-recognition-deepspeech-unidirectional.png",srcSet:["/static/896790eb2e0e662652e5d0ca3d2a9c32/43fa5/blog-stt-speech-recognition-deepspeech-unidirectional.png 250w","/static/896790eb2e0e662652e5d0ca3d2a9c32/c6e3d/blog-stt-speech-recognition-deepspeech-unidirectional.png 500w","/static/896790eb2e0e662652e5d0ca3d2a9c32/25b0e/blog-stt-speech-recognition-deepspeech-unidirectional.png 625w"],sizes:"(max-width: 625px) 100vw, 625px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"An alternative architecture that uses a unidirectional RNN in which each time\nstep only depends on the input at that time and the state from the previous\nstep."),Object(i.b)("p",null,"Here’s code for creating an inference graph that can keep track of the state\nbetween each input window:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\n\ndef create_inference_graph(batch_size=1, n_steps=16, n_features=26, width=64):\n    input_ph = tf.placeholder(dtype=tf.float32,\n                              shape=[batch_size, n_steps, n_features],\n                              name='input')\n    sequence_lengths = tf.placeholder(dtype=tf.int32,\n                                      shape=[batch_size],\n                                      name='input_lengths')\n    previous_state_c = tf.get_variable(dtype=tf.float32,\n                                       shape=[batch_size, width],\n                                       name='previous_state_c')\n    previous_state_h = tf.get_variable(dtype=tf.float32,\n                                       shape=[batch_size, width],\n                                       name='previous_state_h')\n    previous_state = tf.contrib.rnn.LSTMStateTuple(previous_state_c, previous_state_h)\n\n    # Transpose from batch major to time major\n    input_ = tf.transpose(input_ph, [1, 0, 2])\n\n    # Flatten time and batch dimensions for feed forward layers\n    input_ = tf.reshape(input_, [batch_size*n_steps, n_features])\n\n    # Three ReLU hidden layers\n    layer1 = tf.contrib.layers.fully_connected(input_, width)\n    layer2 = tf.contrib.layers.fully_connected(layer1, width)\n    layer3 = tf.contrib.layers.fully_connected(layer2, width)\n\n    # Unidirectional LSTM\n    rnn_cell = tf.contrib.rnn.LSTMBlockFusedCell(width)\n    rnn, new_state = rnn_cell(layer3, initial_state=previous_state)\n    new_state_c, new_state_h = new_state\n\n    # Final hidden layer\n    layer5 = tf.contrib.layers.fully_connected(rnn, width)\n\n    # Output layer\n    output = tf.contrib.layers.fully_connected(layer5, ALPHABET_SIZE+1, activation_fn=None)\n\n    # Automatically update previous state with new state\n    state_update_ops = [\n        tf.assign(previous_state_c, new_state_c),\n        tf.assign(previous_state_h, new_state_h)\n    ]\n    with tf.control_dependencies(state_update_ops):\n        logits = tf.identity(logits, name='logits')\n\n    # Create state initialization operations\n    zero_state = tf.zeros([batch_size, n_cell_dim], tf.float32)\n    initialize_c = tf.assign(previous_state_c, zero_state)\n    initialize_h = tf.assign(previous_state_h, zero_state)\n    initialize_state = tf.group(initialize_c, initialize_h, name='initialize_state')\n\n    return {\n        'inputs': {\n            'input': input_ph,\n            'input_lengths': sequence_lengths,\n        },\n        'outputs': {\n            'output': logits,\n            'initialize_state': initialize_state,\n        }\n    }\n")),Object(i.b)("p",null,"The graph created by the code above has two inputs and two outputs. The inputs\nare the sequences and their lengths. The outputs are the logits and a special\n",Object(i.b)("inlineCode",{parentName:"p"},"initialize_state")," node that needs to be run at the beginning of a new\nsequence. When freezing the graph, make sure you don’t freeze the state\nvariables ",Object(i.b)("inlineCode",{parentName:"p"},"previous_state_h")," and ",Object(i.b)("inlineCode",{parentName:"p"},"previous_state_c"),"."),Object(i.b)("p",null,"Here’s code for freezing the graph:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from tensorflow.python.tools import freeze_graph\n\nfreeze_graph.freeze_graph_with_def_protos(\n        input_graph_def=session.graph_def,\n        input_saver_def=saver.as_saver_def(),\n        input_checkpoint=checkpoint_path,\n        output_node_names='logits,initialize_state',\n        restore_op_name=None,\n        filename_tensor_name=None,\n        output_graph=output_graph_path,\n        initializer_nodes='',\n        variable_names_blacklist='previous_state_c,previous_state_h')\n")),Object(i.b)("p",null,"With these changes to the model, we can use the following approach on the client side:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"initialize_state")," node."),Object(i.b)("li",{parentName:"ol"},"Accumulate audio samples until there’s enough data to feed to the model (16 time steps in our case, or 320ms)."),Object(i.b)("li",{parentName:"ol"},"Feed through the model, accumulate outputs somewhere."),Object(i.b)("li",{parentName:"ol"},"Repeat 2 and 3 until data is over.")),Object(i.b)("p",null,"It wouldn’t make sense to drown readers with hundreds of lines of the\nclient-side code here, but if you’re interested, it’s all MPL 2.0 licensed and\navailable on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/STT"},"GitHub"),". We actually have two\ndifferent implementations, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/STT/blob/bb299dc26554b2fbf864b7f0115b4baece15bda5/evaluate.py#L233"},"one in\nPython"),"\nthat we use for generating test reports, and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/STT/blob/6f27928841c2595c8dd9d08f482c95ca9e42f4b5/native_client/deepspeech.cc"},"one in\nC++"),"\nwhich is behind our official client API."),Object(i.b)("h3",{id:"performance-improvements",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#performance-improvements","aria-label":"performance improvements permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(i.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"Performance improvements"),Object(i.b)("p",null,"What does this all mean for our STT engine? Well, here are some numbers,\ncompared with our current stable release:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Model size down from 468MB to 180MB"),Object(i.b)("li",{parentName:"ul"},"Time to transcribe: 3s file on a laptop CPU, down from 9s to 1.5s"),Object(i.b)("li",{parentName:"ul"},"Peak heap usage down from 4GB to 20MB (model is now memory-mapped)"),Object(i.b)("li",{parentName:"ul"},"Total heap allocations down from 12GB to 264MB")),Object(i.b)("p",null,"Of particular importance to me is that we’re now faster than real time without\nusing a GPU, which, together with streaming inference, opens up lots of new\nusage possibilities like live captioning of radio programs, Twitch streams, and\nkeynote presentations; home automation; voice-based UIs; and so on. If you’re\nlooking to integrate speech recognition in your next project, consider using\nour engine!"),Object(i.b)("p",null,"Here’s a small Python program that demonstrates how to use libSoX to record\nfrom the microphone and feed it into the engine as the audio is being recorded."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import argparse\nimport deepspeech as ds\nimport numpy as np\nimport shlex\nimport subprocess\nimport sys\n\nparser = argparse.ArgumentParser(description='Coqui STT speech-to-text from microphone')\nparser.add_argument('--model', required=True,\n                    help='Path to the model (protocol buffer binary file)')\nparser.add_argument('--alphabet', required=True,\n                    help='Path to the configuration file specifying the alphabet used by the network')\nparser.add_argument('--lm', nargs='?',\n                    help='Path to the language model binary file')\nparser.add_argument('--trie', nargs='?',\n                    help='Path to the language model trie file created with native_client/generate_trie')\nargs = parser.parse_args()\n\nLM_WEIGHT = 1.50\nVALID_WORD_COUNT_WEIGHT = 2.25\nN_FEATURES = 26\nN_CONTEXT = 9\nBEAM_WIDTH = 512\n\nprint('Initializing model...')\n\nmodel = ds.Model(args.model, N_FEATURES, N_CONTEXT, args.alphabet, BEAM_WIDTH)\nif args.lm and args.trie:\n    model.enableDecoderWithLM(args.alphabet,\n                              args.lm,\n                              args.trie,\n                              LM_WEIGHT,\n                              VALID_WORD_COUNT_WEIGHT)\nsctx = model.setupStream()\n\nsubproc = subprocess.Popen(shlex.split('rec -q -V0 -e signed -L -c 1 -b 16 -r 16k -t raw - gain -2'),\n                           stdout=subprocess.PIPE,\n                           bufsize=0)\nprint('You can start speaking now. Press Control-C to stop recording.')\n\ntry:\n    while True:\n        data = subproc.stdout.read(512)\n        model.feedAudioContent(sctx, np.frombuffer(data, np.int16))\nexcept KeyboardInterrupt:\n    print('Transcription:', model.finishStream(sctx))\n    subproc.terminate()\n    subproc.wait()\n")),Object(i.b)("p",null,"Finally, if you’re looking to contribute to Project Coqui STT itself, we have\nplenty of opportunities. The codebase is written in Python and C++, and we\nwould love to add iOS and Windows support, for example. Reach out to us via our\n",Object(i.b)("a",{parentName:"p",href:"https://gitter.im/coqui-ai/community"},"Gitter channel")," or our ",Object(i.b)("a",{parentName:"p",href:"https://github.com/coqui-ai/STT/discussions"},"GitHub\nforum"),"."),Object(i.b)("h3",{id:"license",style:{position:"relative"}},Object(i.b)("a",{parentName:"h3",href:"#license","aria-label":"license permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",focusable:"false",viewBox:"0 0 16 16"},"\n  ",Object(i.b)("path",{parentName:"svg",fill:"currentColor",d:"M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"}))),"License"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution Share-Alike License v3.0")," or any later version"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-stt-speech-recognition-deepspeech-mdx-4ecf7b97c2e06c629650.js.map