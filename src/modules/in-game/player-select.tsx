import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { trpc } from '~/utils/trpc';
import { useInGameSceneStore } from './in-game-scene-store';

export function PlayerSelect() {
  const router = useRouter();
  const { data } = trpc.players.getAllPlayersData.useQuery({ locale: router.locale });
  const selectedPlayer = useInGameSceneStore(state => state.selectedPlayer);
  const setSelectedPlayer = useInGameSceneStore(state => state.setSelectedPlayer);

  return (
    <div className="flex items-center space-x-2">
      <Listbox value={selectedPlayer} onChange={setSelectedPlayer}>
        {({ open }) => (
          <div className="flex items-center space-x-2">
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Select player
            </Listbox.Label>
            <div className="relative w-[180px]">
              <Listbox.Button
                className={clsx(
                  'relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6',
                  selectedPlayer ? 'text-gray-900' : 'text-gray-500'
                )}
              >
                <span className="block truncate">
                  {selectedPlayer?.nickname ?? 'Select a player...'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-[160px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data?.map(item => (
                    <Listbox.Option
                      key={item.nickname}
                      className={({ active }) =>
                        clsx(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={clsx(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {item.nickname}
                          </span>

                          {selected ? (
                            <span
                              className={clsx(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={() => setSelectedPlayer(undefined)}
      >
        Clear
      </button>
    </div>
  );
}
