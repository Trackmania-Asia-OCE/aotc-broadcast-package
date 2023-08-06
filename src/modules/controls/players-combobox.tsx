import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { PlayerData } from '~/server/types';
import { trpc } from '~/utils/trpc';

export interface PlayersComboboxProps {
  label: string;
  selectedPlayer?: PlayerData;
  onSetSelectedPlayer?: (player?: PlayerData) => void;
  onClearSelectedPlayer?: () => void;
}

export function PlayersCombobox({
  label,
  selectedPlayer,
  onSetSelectedPlayer,
  onClearSelectedPlayer,
}: PlayersComboboxProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const { data } = trpc.players.getAllPlayersData.useQuery({ locale: router.locale });

  const handleSetSelectedPlayer = (player?: PlayerData) => {
    if (onSetSelectedPlayer) {
      onSetSelectedPlayer(player);
    }
  };

  const handleClearSelectedPlayer = () => {
    if (onClearSelectedPlayer) {
      onClearSelectedPlayer();
    }
  };

  const filteredPlayers =
    query === ''
      ? data
      : data?.filter(player =>
          player.nickname
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        ) ?? [];

  return (
    <div className="flex items-center space-x-2">
      <Combobox value={selectedPlayer} onChange={handleSetSelectedPlayer}>
        {({ open }) => (
          <div className="flex items-center space-x-2">
            <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
              {label}
            </Combobox.Label>
            <div className="relative">
              <Combobox.Input
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                displayValue={(player: PlayerData) => player.nickname}
                onChange={event => setQuery(event.target.value)}
                placeholder="Select a player..."
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Combobox.Button>

              <Transition
                show={open}
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-[160px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPlayers?.map(item => (
                    <Combobox.Option
                      key={item.accountId}
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
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Combobox>
      {onClearSelectedPlayer ? (
        <button
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={handleClearSelectedPlayer}
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}
