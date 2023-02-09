import { Prisma } from '@prisma/client'

const CARS: Prisma.CarCreateArgs['data'][] = [
  {
    year: 1995,
    make: 'Acura',
    model: 'Integra',
    bodyStyles: ['Sedan', 'Hatchback'],
  },
  {
    year: 1995,
    make: 'Acura',
    model: 'Legend',
    bodyStyles: ['Coupe', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Acura',
    model: 'NSX',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Acura',
    model: 'TL',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Alfa Romeo',
    model: '164',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Audi',
    model: '90',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Audi',
    model: 'A6',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Audi',
    model: 'Cabriolet',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Audi',
    model: 'S6',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '3 Series',
    bodyStyles: ['Hatchback', 'Sedan', 'Coupe', 'Convertible'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '5 Series',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '7 Series',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '8 Series',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: 'M3',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'Century',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'LeSabre',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'Park Avenue',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'Regal',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'Riviera',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'Roadmaster',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Buick',
    model: 'Skylark',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Cadillac',
    model: 'DeVille',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Cadillac',
    model: 'Eldorado',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Cadillac',
    model: 'Fleetwood',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Cadillac',
    model: 'Seville',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '1500 Extended Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '1500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '2500 Extended Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '2500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '3500 Crew Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '3500 HD Extended Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: '3500 HD Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Astro Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Astro Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Beretta',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Blazer',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Camaro',
    bodyStyles: ['Convertible', 'Hatchback'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Caprice Classic',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Cavalier',
    bodyStyles: ['Coupe', 'Sedan', 'Convertible'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Corsica',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Corvette',
    bodyStyles: ['Convertible', 'Hatchback'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'G-Series G10',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'G-Series G20',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'G-Series G30',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Impala',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Lumina',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Lumina Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Lumina Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Monte Carlo',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'S10 Extended Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'S10 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Sportvan G20',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Sportvan G30',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Suburban 1500',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Suburban 2500',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Chevrolet',
    model: 'Tahoe',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'Cirrus',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'Concorde',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'LeBaron',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'LHS',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'New Yorker',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'Sebring',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Chrysler',
    model: 'Town & Country',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Avenger',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Caravan Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Caravan Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Dakota Club Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Dakota Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Grand Caravan Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Intrepid',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Neon',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram 1500 Club Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram 1500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram 2500 Club Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram 2500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram 3500 Club Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram 3500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram Van 1500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram Van 2500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram Van 3500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram Wagon 1500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram Wagon 2500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Ram Wagon 3500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Spirit',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Stealth',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Stratus',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Dodge',
    model: 'Viper',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Eagle',
    model: 'Summit',
    bodyStyles: ['Coupe', 'Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Eagle',
    model: 'Talon',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Eagle',
    model: 'Vision',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Aerostar Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Aerostar Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Aspire',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Bronco',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Club Wagon',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Contour',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Crown Victoria',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Econoline E150 Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Econoline E250 Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Econoline E350 Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Escort',
    bodyStyles: ['Hatchback', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Explorer',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F150 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F150 Super Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F250 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F250 Super Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F350 Crew Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F350 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'F350 Super Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Mustang',
    bodyStyles: ['Convertible', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Probe',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Ranger Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Ranger Super Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Taurus',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Thunderbird',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Windstar Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Ford',
    model: 'Windstar Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Geo',
    model: 'Metro',
    bodyStyles: ['Hatchback', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Geo',
    model: 'Prizm',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Geo',
    model: 'Tracker',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '1500 Club Coupe',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '1500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '2500 Club Coupe',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '2500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '3500 Club Coupe',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '3500 Crew Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: '3500 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Jimmy',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Rally Wagon G2500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Rally Wagon G3500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Safari Cargo',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Safari Passenger',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Sonoma Club Coupe Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Sonoma Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Suburban 1500',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Suburban 2500',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Vandura G1500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Vandura G2500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Vandura G3500',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'GMC',
    model: 'Yukon',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Honda',
    model: 'Accord',
    bodyStyles: ['Sedan', 'Wagon', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Honda',
    model: 'Civic',
    bodyStyles: ['Hatchback', 'Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Honda',
    model: 'del Sol',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Honda',
    model: 'Odyssey',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Honda',
    model: 'Passport',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Honda',
    model: 'Prelude',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'HUMMER',
    model: 'H1',
    bodyStyles: ['SUV', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Hyundai',
    model: 'Accent',
    bodyStyles: ['Hatchback', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Hyundai',
    model: 'Elantra',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Hyundai',
    model: 'Scoupe',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Hyundai',
    model: 'Sonata',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'INFINITI',
    model: 'G',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'INFINITI',
    model: 'J',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'INFINITI',
    model: 'Q',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Isuzu',
    model: 'Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Isuzu',
    model: 'Rodeo',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Isuzu',
    model: 'Trooper',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Jaguar',
    model: 'XJ',
    bodyStyles: ['Sedan', 'Coupe', 'Convertible'],
  },
  {
    year: 1995,
    make: 'Jeep',
    model: 'Cherokee',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Jeep',
    model: 'Grand Cherokee',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Jeep',
    model: 'Wrangler',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Kia',
    model: 'Sephia',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Kia',
    model: 'Sportage',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Land Rover',
    model: 'Defender 90',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Land Rover',
    model: 'Discovery',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Land Rover',
    model: 'Range Rover',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Lexus',
    model: 'ES',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Lexus',
    model: 'GS',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Lexus',
    model: 'LS',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Lexus',
    model: 'SC',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Lincoln',
    model: 'Continental',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Lincoln',
    model: 'Mark VIII',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Lincoln',
    model: 'Town Car',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: '626',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: '929',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'B-Series Cab Plus',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'B-Series Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'Millenia',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'MPV',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'MX-3',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'MX-5 Miata',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'MX-6',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'Protege',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'MAZDA',
    model: 'RX-7',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Mercedes-Benz',
    model: 'E-Class',
    bodyStyles: ['Coupe', 'Convertible', 'Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Mercedes-Benz',
    model: 'SL-Class',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Mercury',
    model: 'Cougar',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Mercury',
    model: 'Grand Marquis',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Mercury',
    model: 'Mystique',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Mercury',
    model: 'Sable',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Mercury',
    model: 'Tracer',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Mercury',
    model: 'Villager',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: '3000GT',
    bodyStyles: ['Convertible', 'Hatchback'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Diamante',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Eclipse',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Expo',
    bodyStyles: ['Wagon'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Galant',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Mighty Max Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Mirage',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Mitsubishi',
    model: 'Montero',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: '200SX',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: '240SX',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: '300ZX',
    bodyStyles: ['Hatchback', 'Convertible'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'Altima',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'King Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'Maxima',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'Pathfinder',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'Quest',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Nissan',
    model: 'Sentra',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: '88',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: '98',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: 'Achieva',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: 'Aurora',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: 'Cutlass Ciera',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: 'Cutlass Supreme',
    bodyStyles: ['Convertible', 'Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Oldsmobile',
    model: 'Silhouette',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Plymouth',
    model: 'Acclaim',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Plymouth',
    model: 'Grand Voyager',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Plymouth',
    model: 'Neon',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Plymouth',
    model: 'Voyager',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Pontiac',
    model: 'Bonneville',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Pontiac',
    model: 'Firebird',
    bodyStyles: ['Convertible', 'Hatchback'],
  },
  {
    year: 1995,
    make: 'Pontiac',
    model: 'Grand Am',
    bodyStyles: ['Coupe', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Pontiac',
    model: 'Grand Prix',
    bodyStyles: ['Sedan', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Pontiac',
    model: 'Sunfire',
    bodyStyles: ['Coupe', 'Convertible', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Pontiac',
    model: 'Trans Sport',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Porsche',
    model: '911',
    bodyStyles: ['Coupe', 'Convertible'],
  },
  {
    year: 1995,
    make: 'Porsche',
    model: '928',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Porsche',
    model: '968',
    bodyStyles: ['Coupe', 'Convertible'],
  },
  {
    year: 1995,
    make: 'Saab',
    model: '900',
    bodyStyles: ['Hatchback', 'Convertible'],
  },
  {
    year: 1995,
    make: 'Saab',
    model: '9000',
    bodyStyles: ['Hatchback', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Saturn',
    model: 'S-Series',
    bodyStyles: ['Coupe', 'Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Subaru',
    model: 'Impreza',
    bodyStyles: ['Sedan', 'Wagon', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Subaru',
    model: 'Legacy',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Subaru',
    model: 'SVX',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Suzuki',
    model: 'Esteem',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Suzuki',
    model: 'Samurai',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Suzuki',
    model: 'Sidekick',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Suzuki',
    model: 'Swift',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: '4Runner',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Avalon',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Camry',
    bodyStyles: ['Sedan', 'Coupe', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Celica',
    bodyStyles: ['Hatchback', 'Convertible', 'Coupe'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Corolla',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Land Cruiser',
    bodyStyles: ['SUV'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'MR2',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Paseo',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Previa',
    bodyStyles: ['Van_Minivan'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Supra',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'T100 Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'T100 Xtracab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Tacoma Regular Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Tacoma Xtracab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Tercel',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Toyota',
    model: 'Xtra Cab',
    bodyStyles: ['Pickup'],
  },
  {
    year: 1995,
    make: 'Volkswagen',
    model: 'Cabrio',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Volkswagen',
    model: 'Golf III',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Volkswagen',
    model: 'GTI',
    bodyStyles: ['Hatchback'],
  },
  {
    year: 1995,
    make: 'Volkswagen',
    model: 'Jetta III',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'Volkswagen',
    model: 'Passat',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Volvo',
    model: '850',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Volvo',
    model: '940',
    bodyStyles: ['Sedan', 'Wagon'],
  },
  {
    year: 1995,
    make: 'Volvo',
    model: '960',
    bodyStyles: ['Sedan', 'Wagon'],
  },
]

export const ACURA: Prisma.CarCreateArgs['data'][] = [
  {
    year: 1995,
    make: 'Acura',
    model: 'Integra',
    bodyStyles: ['Sedan', 'Hatchback'],
  },
  {
    year: 1995,
    make: 'Acura',
    model: 'Legend',
    bodyStyles: ['Coupe', 'Sedan'],
  },
  {
    year: 1995,
    make: 'Acura',
    model: 'NSX',
    bodyStyles: ['Convertible'],
  },
  {
    year: 1995,
    make: 'Acura',
    model: 'TL',
    bodyStyles: ['Sedan'],
  },
]

export const BMW: Prisma.CarCreateArgs['data'][] = [
  {
    year: 1995,
    make: 'BMW',
    model: '3 Series',
    bodyStyles: ['Hatchback', 'Sedan', 'Coupe', 'Convertible'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '5 Series',
    bodyStyles: ['Wagon', 'Sedan'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '7 Series',
    bodyStyles: ['Sedan'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: '8 Series',
    bodyStyles: ['Coupe'],
  },
  {
    year: 1995,
    make: 'BMW',
    model: 'M3',
    bodyStyles: ['Coupe'],
  },
]
