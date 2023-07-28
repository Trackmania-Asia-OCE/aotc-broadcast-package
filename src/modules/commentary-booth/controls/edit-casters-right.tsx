import * as React from 'react';
import { useCommentaryBoothStore } from '../store';

export function EditCastersRight() {
  const casterRightCountry = useCommentaryBoothStore(state => state.casterRightCountry);
  const setCasterRightCountry = useCommentaryBoothStore(state => state.setCasterRightCountry);
  const casterRightName = useCommentaryBoothStore(state => state.casterRightName);
  const setCasterRightName = useCommentaryBoothStore(state => state.setCasterRightName);
  const casterRightHandle = useCommentaryBoothStore(state => state.casterRightHandle);
  const setCasterRightHandle = useCommentaryBoothStore(state => state.setCasterRightHandle);

  const [casterCountry, setCasterCountry] = React.useState(casterRightCountry);
  const [casterName, setCasterName] = React.useState(casterRightName);
  const [casterHandle, setCasterHandle] = React.useState(casterRightHandle);

  const handleSave = () => {
    setCasterRightCountry(casterCountry);
    setCasterRightName(casterName);
    setCasterRightHandle(casterHandle);
  };

  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <label
          htmlFor="currentMatch"
          className="block text-sm font-medium whitespace-nowrap leading-6 text-gray-900"
        >
          Country
        </label>
        <input
          className="block w-full max-w-[72px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="currentMatch"
          name="currentMatch"
          value={casterCountry}
          onChange={e => setCasterCountry(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <label
          htmlFor="currentMatch"
          className="block text-sm font-medium whitespace-nowrap leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="currentMatch"
          name="currentMatch"
          value={casterName}
          onChange={e => setCasterName(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <label
          htmlFor="currentMatch"
          className="block text-sm font-medium whitespace-nowrap leading-6 text-gray-900"
        >
          Handle
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="currentMatch"
          name="currentMatch"
          value={casterHandle}
          onChange={e => setCasterHandle(e.target.value)}
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
