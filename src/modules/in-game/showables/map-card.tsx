import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { ArrowIcon, StopwatchIcon } from '~/components/icons';
import { trpc } from '~/utils/trpc';
import { formatTime } from '~/utils/format-time';
import { useInGameSceneStore } from '../store';
import { CardHeading } from '../components/card-heading';
import { CardSectionHeading } from '../components/card-section-heading';
import { InfoItemCard } from '../components/info-item-card';
import { InfoBadge } from '../components/info-badge';
import { MAP_SURFACES } from '../constants';
import * as styles from './map-card.css';

export interface MapCardProps {
  open?: boolean;
  onClose?: (value: boolean) => void;
}

export function MapCard({ open, onClose }: MapCardProps) {
  const { t, ready } = useTranslation('common');
  const selectedMap = useInGameSceneStore(state => state.selectedMap);
  const {
    data: mapRecordData,
    isFetching,
    isError,
  } = trpc.maps.getMapRecordByUID.useQuery(
    {
      uid: selectedMap?.uid,
    },
    { refetchInterval: 10000 }
  );

  const renderTime = () => {
    if ((!mapRecordData && isFetching) || isError) {
      return 0;
    }

    if (mapRecordData?.record?.time) {
      return mapRecordData.record.time;
    }

    return 0;
  };

  const renderUsername = () => {
    if (!mapRecordData && isFetching) {
      return 'Fetching records...';
    }

    if (isError) {
      return '-';
    }

    if (mapRecordData?.record?.player.name) {
      return mapRecordData.record.player.name;
    }

    return '-';
  };

  const handleClose = (value: boolean) => {
    if (onClose) {
      onClose(value);
    }
  };

  if (!ready) {
    return null;
  }

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
                        title={selectedMap?.name ?? '-'}
                        subtitle={selectedMap?.author ?? '-'}
                      />
                    </div>
                    <div className="relative flex-1 px-[100px] pt-[108px] pb-[64px]">
                      <div className="space-y-[60px]">
                        <div className="space-y-5">
                          <CardSectionHeading title={t('map-card.title')} />
                          <div className="space-y-4">
                            <InfoItemCard
                              icon={StopwatchIcon}
                              title={formatTime(renderTime())}
                              subtitle={renderUsername()}
                            />
                          </div>
                        </div>
                        <div className="space-y-5">
                          <CardSectionHeading title={t('map-card.surface-title')} />
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                              {MAP_SURFACES.map(surface => (
                                <InfoBadge
                                  key={surface}
                                  variant={
                                    selectedMap?.surfaces.includes(surface) ? 'active' : 'inactive'
                                  }
                                >
                                  {t(`map-card.${surface}`)}
                                </InfoBadge>
                              ))}
                            </div>
                          </div>
                        </div>
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
