import { fetchRemoteComponent } from '../shared/utils/fetch-remote-component';

export const fetchRenderedRemoteComponents = componentsToFetch => {
  return Promise.all(
    componentsToFetch.map(fetchRemoteComponent)
  );
};
