import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image, ScrollView} from 'react-native';
import {useAppContext} from '../../store/context';
import MainLayout from '../../component/Loyout/MainLayout';

const Saves = () => {
  const [activeTab, setActiveTab] = useState('tasks'); // 'tasks' or 'quotes'
  const {favoriteTasks, favoriteQuotes} = useAppContext();

  const renderTaskCard = (task) => (
    <View key={task.id} style={styles.card}>
      <Text style={styles.cardTitle}>Daily Task for Self-Improvement:</Text>
      <Text style={styles.cardText}>{task.task}</Text>
      <View style={styles.cardActions}>
        <Pressable>
          <Image
            source={require('../../assets/image/icons/bookmark.png')}
            style={[styles.actionIcon, styles.bookmarked]}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require('../../assets/image/icons/share.png')}
            style={styles.actionIcon}
          />
        </Pressable>
      </View>
    </View>
  );

  const renderQuoteCard = (quote) => (
    <View key={quote.id} style={styles.card}>
      <Text style={styles.cardTitle}>Daily Quote:</Text>
      <Text style={styles.cardText}>{quote.quote}</Text>
      <Text style={styles.author}>- {quote.author}</Text>
      <View style={styles.cardActions}>
        <Pressable>
          <Image
            source={require('../../assets/image/icons/bookmark.png')}
            style={[styles.actionIcon, styles.bookmarked]}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require('../../assets/image/icons/share.png')}
            style={styles.actionIcon}
          />
        </Pressable>
      </View>
    </View>
  );

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Saved:</Text>
        
        <View style={styles.tabContainer}>
          <Pressable
            style={[styles.tab, activeTab === 'tasks' && styles.activeTab]}
            onPress={() => setActiveTab('tasks')}>
            <Text style={[styles.tabText, activeTab === 'tasks' && styles.activeTabText]}>
              Tasks
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'quotes' && styles.activeTab]}
            onPress={() => setActiveTab('quotes')}>
            <Text style={[styles.tabText, activeTab === 'quotes' && styles.activeTabText]}>
              Quotes
            </Text>
          </Pressable>
        </View>

        <ScrollView style={styles.content}>
          {activeTab === 'tasks'
            ? favoriteTasks.map(renderTaskCard)
            : favoriteQuotes.map(renderQuoteCard)}
        </ScrollView>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#80213C',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  activeTab: {
    borderBottomColor: '#FF64FF',
  },
  tabText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#80213C',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    color: '#80213C',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 10,
  },
  author: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'right',
    marginBottom: 10,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
  },
  actionIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  bookmarked: {
    tintColor: '#FF64FF',
  },
});

export default Saves;
