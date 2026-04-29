package com.krishiconnect.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tutorials")
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String videoId;
    private String description;

    public Tutorial() {}
    public Tutorial(String title, String videoId, String description) {
        this.title = title;
        this.videoId = videoId;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getVideoId() { return videoId; }
    public void setVideoId(String videoId) { this.videoId = videoId; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
