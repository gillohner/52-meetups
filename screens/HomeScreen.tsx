// screens/HomeScreen.tsx
import React from 'react';
import { Box, Text, ScrollView } from 'native-base';
import EventCard from '../components/EventCard';
import useNostrEvents from '../hooks/useNostrEvents';
import { i18n } from '../App';

const HomeScreen = () => {
  const { events, loading } = useNostrEvents();

  const handlePress = (eventId) => {
    console.log('Event Pressed:', eventId);
    // Handle navigation or other logic here
  };

  return (
    <ScrollView>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text fontSize="xl" bold mt="3" mb="2">{i18n.t('upcomingEvents')}</Text>
        {loading && <Text>{i18n.t('loading')}</Text>}
        {events.map(event => (
          <EventCard key={event.id} event={event} onPress={handlePress} />
        ))}
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
