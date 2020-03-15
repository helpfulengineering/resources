import React from 'react';

import { Theme } from '../src/components/ui/Theme';

export const GlobalStyleDecorator = storyFn => <Theme>{storyFn()}</Theme>;
