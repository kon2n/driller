import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faEraser);
library.add(faCheck);
library.add(faTimes);

const ICON: { [iconKey: string]: IconLookup } = {
  BACKSPACE: faEraser,
  GOOD: faCheck,
  BAD: faTimes,
};

export { ICON };
