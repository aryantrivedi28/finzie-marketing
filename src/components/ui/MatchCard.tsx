import React from 'react'
import { Card, CardContent } from './card'
import { Badge } from './badge'
import { Button } from './button'

interface MatchCardProps {
  name: string
  title: string
  specialty: string
  match: number
  available: boolean
}

const MatchCard = ({ name, title, specialty, match, available }: MatchCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center font-display font-bold text-teal">
              {name.charAt(0)}
            </div>
            <div>
              <h3 className="font-display text-lg font-400 text-night">{name}</h3>
              <p className="text-sm text-stone">{title}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-display font-500 text-teal">{match}%</div>
          <div className="text-xs text-stone">match</div>
        </div>
      </CardContent>
      <CardContent className="pt-0">
        <Badge variant="teal" className="mb-4">
          {specialty}
        </Badge>
        <p className="text-sm text-carbon mb-4 leading-relaxed">
          Specialized in {specialty.toLowerCase()}. Ready to start immediately.
        </p>
        <Button
          size="md"
          disabled={!available}
          className="w-full"
        >
          {available ? 'View Profile' : 'Coming Soon'}
        </Button>
      </CardContent>
    </Card>
  )
}

export { MatchCard }
