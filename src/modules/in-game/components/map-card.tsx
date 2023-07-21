import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface MapCardProps {
  open?: boolean;
  onClose?: (value: boolean) => void;
}

export function MapCard({ open, onClose }: MapCardProps) {
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
                  <div className="flex h-[1080px] flex-col overflow-hidden bg-gradient-to-r from-black to-black/80 py-[100px]">
                    <div className="px-[100px]">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          Map Card
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="relative flex-1 px-[100px]">{/* Your content */}</div>
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
