'use client';
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCafeOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const isCart = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap items-center justify-center">
      <SimpleWidget
        href="/dashboard/counter"
        label={isCart.toString()}
        subTitle="Ay la llevamos"
        title="Contador" 
        icon={<IoCafeOutline size={30} className="text-blue-600" />}
      />
    </div>
  )
}
