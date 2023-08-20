import { Transition } from '@headlessui/react';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { MatchesSectionHeading } from '../components';
import { ResultItem } from '../components/result-item';
import { useResultsStore } from '../results-store';

export interface MatchResultsProps {
  isVisible?: boolean;
}

export function MatchResults({ isVisible = false }: MatchResultsProps) {
  const { t } = useTranslation('common');
  const players = useResultsStore(state => state.players);

  return (
    <div className="flex flex-col w-[1560px] h-[81px] overflow-hidden">
      <Transition show={isVisible}>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in-out duration-300 transform delay-500"
          leaveFrom="translate-x-0"
          leaveTo="opacity-100 opacity-0 -translate-x-full"
        >
          <MatchesSectionHeading title={t('commentary-booth.results-title')} />
        </Transition.Child>
        <div className="grid grid-cols-4 gap-5 h-[50px] mt-[15px] overflow-hidden">
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform delay-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <ResultItem
              position={1}
              country={players[0]?.country}
              name={`${players[0]?.nickname ?? ''}${players[0]?.isRookie ? ' (R)' : ''}`}
            />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform delay-100"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform delay-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <ResultItem
              position={2}
              country={players[1]?.country}
              name={`${players[1]?.nickname ?? ''}${players[1]?.isRookie ? ' (R)' : ''}`}
            />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform delay-200"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform delay-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <ResultItem
              position={3}
              country={players[2]?.country}
              name={`${players[2]?.nickname ?? ''}${players[2]?.isRookie ? ' (R)' : ''}`}
            />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform delay-300"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <ResultItem
              position={4}
              country={players[3]?.country}
              name={`${players[3]?.nickname ?? ''}${players[3]?.isRookie ? ' (R)' : ''}`}
            />
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
}
