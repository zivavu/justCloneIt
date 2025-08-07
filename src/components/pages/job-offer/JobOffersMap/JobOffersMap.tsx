'use client';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { TOP_OFFSET } from '../../home/const';

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

export default function JobOffersMap() {
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<maptilersdk.Map>(null);
	const tokyo = { lng: 139.753, lat: 35.6844 };

	const zoom = 14;
	if (!MAPTILER_API_KEY) return <div>Provide a Maptiler API key</div>;
	maptilersdk.config.apiKey = MAPTILER_API_KEY;

	useEffect(() => {
		if (map.current) return;
		if (!mapContainer.current) return;

		map.current = new maptilersdk.Map({
			container: mapContainer.current,
			style: maptilersdk.MapStyle.STREETS,
			center: [tokyo.lng, tokyo.lat],
			zoom: zoom,
		});
	}, [tokyo.lng, tokyo.lat, zoom]);

	return (
		<Box sx={{ position: 'sticky', top: TOP_OFFSET }}>
			<Box sx={{ position: 'relative' }}>
				<Box
					sx={{ position: 'absolute', width: '100%', height: '100vh' }}
					ref={mapContainer}
				/>
			</Box>
		</Box>
	);
}
