/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const tagNameMap = {
  'ukrainian/robinhad/v0.4': ['Yurii Paniv', 'https://github.com/robinhad/'],
  'welsh/techiaith/v21.03': ['Dewi Bryn Jones', 'https://github.com/dewibrynjones/'],
  'catalan/ccoreilly/v0.14.0': ["Ciaran O'Reilly", 'https://github.com/ccoreilly'],
  'german/AASHISHAG/v0.9.0': ['Aashish Agarwal', 'https://github.com/AASHISHAG'],
  'kinyarwanda/digital-umuganda/v0.0.1': ['Digital Umuganda', 'https://digitalumuganda.com/'],
  'spanish/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'french/commonvoice-fr/v0.6': [
    'commonvoice-fr',
    'https://github.com/common-voice/commonvoice-fr'
  ],
  'french/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'german/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'italian/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'polish/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'komi/itml/v0.0.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'chuvash/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'basque/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'luganda/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'breton/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'dhivehi/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'dhivehi/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'greek/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'estonian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'finnish/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'frisian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'georgian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'hakha-chin/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'hungarian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'indonesian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'irish/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'kyrgyz/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'latvian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'lithuanian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'maltese/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'mongolian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'odia/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'portuguese/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'slovenian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'sakha/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'romanian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'czech/comodoro/v0.1.0': ['Vojtěch Drábek', 'https://github.com/comodoro'],
  'english/coqui/v0.9.3': ['Coqui', 'https://coqui.ai/'],
  'italian/mozillaitalia/2020.8.7': ['Mozilla Italia', 'https://github.com/MozillaItalia'],
  'breton/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'chuvash/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'estonian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'finnish/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'frisian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'georgian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'greek/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'hakha-chin/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'hungarian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'indonesian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'irish/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'kyrgyz/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'latvian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'lithuanian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'luganda/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'maltese/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'mongolian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'odia/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'portuguese/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'romanian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'sakha/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'slovenian/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'basque/itml/v0.1.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'romansh-vallader/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'tatar/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'tamil/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'thai/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'turkish/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'upper-sorbian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'amharic/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'romansh-sursilvan/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'wolof/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'yoruba/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'dutch/acabunoc/v0.0.1': ['Abigail Cabunoc Mayes', 'https://github.com/acabunoc'],
  'russian/jemeyer/v0.1.0': ['Joe Meyer', 'https://www.linkedin.com/in/joe-meyer-25753951/']
};

exports.tagNameMap = tagNameMap;
