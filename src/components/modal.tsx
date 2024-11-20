import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { doNothing } from 'remeda';
import { FC, Fragment, PropsWithChildren } from 'react';

export const Modal: FC<
  PropsWithChildren & {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
  }
> = ({ isOpen, onClose = doNothing, title, children }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={clsx(
                'fixed inset-0 bg-black bg-opacity-25',
                'dark:bg-white/10',
              )}
            />
          </Transition.Child>

          <div className="tappable fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center px-4 py-20 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={clsx(
                    'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',
                    'dark:bg-gray-900 dark:text-white',
                  )}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};