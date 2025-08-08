'use client';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { TOP_OFFSET } from '../../home/const';

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
export function JobOffersMap() {
	console.log('MAPTILER_API_KEY', MAPTILER_API_KEY);
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<maptilersdk.Map>(null);
	const poznan = { lng: 16.933, lat: 52.409538 };

	const zoom = 14;
	if (!MAPTILER_API_KEY) return <div>Provide a Maptiler API key</div>;
	maptilersdk.config.apiKey = MAPTILER_API_KEY;

	useEffect(() => {
		if (map.current) return;
		if (!mapContainer.current) return;

		map.current = new maptilersdk.Map({
			container: mapContainer.current,
			style: maptilersdk.MapStyle.STREETS,
			center: [poznan.lng, poznan.lat],
			zoom: zoom,
		});
	}, [poznan.lng, poznan.lat, zoom]);

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
