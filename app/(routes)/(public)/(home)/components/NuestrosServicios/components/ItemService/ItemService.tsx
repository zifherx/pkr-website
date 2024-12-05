"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {motion} from 'framer-motion'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { tServicio } from '@/types'
import { Info } from 'lucide-react'

export function ItemService({servicio}: tServicio) {

    const { title, slug, cta,image,parrafos } = servicio
    const router = useRouter()

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
        <Card className='overflow-hidden'>
            <CardHeader className='p-0'>
                <Image
                    src={image}
                    width={800}
                    height={400}
                    alt={title}
                    className='object-cover'
                />
            </CardHeader>
            <CardContent className='p-6'>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {
                parrafos.map(({id,parrafo}) => (
                    <p key={id} className='text-sm text-gray-600'>{parrafo}</p>
                ))
            }
            </CardContent>
            <CardFooter className='p-6 pt-0'>
                <Button className='w-full' onClick={() => router.push(`servicios/${slug}`)}>
                    {cta}
                    <Info className="ml-2 h-5 w-5" />
                </Button>
            </CardFooter>
        </Card>
    </motion.div>
  )
}
