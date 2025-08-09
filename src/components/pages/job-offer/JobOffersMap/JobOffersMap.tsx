'use client';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { TOP_OFFSET } from '../../home/const';
import { JobOfferComponentProps } from '../types';

const CUSTOM_STYLE_URL =
	'https://api.maptiler.com/maps/ce102dd9-4063-4186-a993-ff95a539fca7/style.json?key=z7iGzSLh53F8TdrmZbkk';

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
export function JobOffersMap({ offer }: JobOfferComponentProps) {
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<maptilersdk.Map>(null);

	if (!offer) return null;
	const softwareHouseLocation = offer?.location;

	const zoom = 14;
	if (!MAPTILER_API_KEY) return <div>Provide a Maptiler API key</div>;
	maptilersdk.config.apiKey = MAPTILER_API_KEY;

	// /maps/ce102dd9-4063-4186-a993-ff95a539fca7/style.json
	useEffect(() => {
		if (map.current) return;
		if (!mapContainer.current) return;

		map.current = new maptilersdk.Map({
			container: mapContainer.current,
			style: CUSTOM_STYLE_URL,
			center: [softwareHouseLocation.lng, softwareHouseLocation.lat],
			zoom: zoom,
		});
	}, [softwareHouseLocation.lng, softwareHouseLocation.lat, zoom]);
	return (
		<Box
			sx={{
				position: 'sticky',
				top: TOP_OFFSET,
				height: `calc(100vh - ${TOP_OFFSET}px)`,
			}}>
			<Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
				<Box
					sx={{ position: 'absolute', width: '100%', height: '100%' }}
					ref={mapContainer}
				/>
			</Box>
		</Box>
	);
}
