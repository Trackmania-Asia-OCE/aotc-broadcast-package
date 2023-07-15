import * as React from 'react';
import { useInGameSceneStore } from './in-game-scene-store';

export function CurrentMatch() {
  const currentMatch = useInGameSceneStore(state => state.currentMatch);
  const setCurrentMatch = useInGameSceneStore(state => state.setCurrentMatch);
  const [value, setValue] = React.useState(currentMatch);

  const handleSave = () => {
    setCurrentMatch(value);
  };

  return (
    <div className="flex items-end space-x-4">
      <div className="space-y-1">
        <label htmlFor="currentMatch" className="block text-sm font-medium leading-6 text-gray-900">
          Current match
        </label>
        <input
          className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="currentMatch"
          name="currentMatch"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}
