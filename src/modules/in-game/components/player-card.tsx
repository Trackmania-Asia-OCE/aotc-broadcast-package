import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ArrowIcon } from '~/components/icons/arrow-icon';
import clsx from 'clsx';
import { useInGameSceneStore } from '../store';
import { CardHeading } from './card-heading';
import * as styles from './player-card.css';
import { CardSectionHeading } from './card-section-heading';

export interface PlayerCardProps {
  open?: boolean;
  onClose?: (value: boolean) => void;
}

export function PlayerCard({ open, onClose }: PlayerCardProps) {
  const selectedPlayer = useInGameSceneStore(state => state.selectedPlayer);

  const handleClose = (value: boolean) => {
    if (onClose) {
      onClose(value);
    }
  };

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={React.Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[675px]">
                  <div className="flex h-[1080px] flex-col overflow-hidden bg-gradient-to-r from-black to-black/80 py-[160px]">
                    <div className="px-[100px]">
                      <CardHeading
                        title={selectedPlayer?.nickname ?? '-'}
                        subtitle={selectedPlayer?.realName ?? '-'}
                      />
                    </div>
                    <div className="relative flex-1 px-[100px] pt-[108px] pb-[64px]">
                      <div className="space-y-5">
                        <CardSectionHeading title="Player Information" />
                        <div className="space-y-4">x</div>
                      </div>
                    </div>
                    <div className="px-[100px]">
                      <div className="flex items-center space-x-2">
                        <ArrowIcon className="text-white" height={10} />
                        <p
                          className={clsx(
                            'font-medium font-brand text-white uppercase',
                            styles.footer
                          )}
                        >
                          AOTC 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
